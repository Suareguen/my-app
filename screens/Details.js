import { SafeAreaView, StyleSheet, StatusBar, Text, View, Button } from "react-native";
import image from "../assets/pokemon.webp";
import { ImageBackground } from "react-native";

import Header from "./../components/Header";
import Body from "../components/Body";

export default function DetailsScreen({ navigation, route }) {

    // Podemos por medio del objeto route obtener el id que le hemos pasado desde la ScreenHome
    const { id } = route.params

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Details</Text>
        <Text>Text Prop: { id }</Text>

        <View>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
})



