import {
  StyleSheet, Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen"
import DetailsScreen from "./screens/Details";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PokedexScreen } from "./screens/PokedexScreen";
import { PokemonScreen } from "./screens/PokemonScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import { PokemonScreenFake } from "./screens/FakeScreenPokedex";

// Create a client
const queryClient = new QueryClient();

//NavigationContainer is a component that manages our navigation tree and contains the navigation state. 
//This component must wrap up the navigator’s structure. 

// Creates a navigation component named Stack using the createNativeStackNavigator() function provided by the @react-navigation/native-stack library.
// This Stack component is used to define and manage stack-based navigation in your React Native application.

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const ScreenStack = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
  )
}

const PokedexStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Pokedex"
        component={PokedexScreen}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        option={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};




export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Principal" component={ScreenStack} />
            <Tab.Screen name="Pokedex" component={PokedexStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}



{/* <NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name="Principal" component={ScreenStack} />
    <Tab.Screen name="Pokedex" component={PokemonScreenFake} />
  </Tab.Navigator>
</NavigationContainer>; */}



// const StackScreen = () => {
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Details" component={DetailsScreen} />
//   </Stack.Navigator>;
// };
