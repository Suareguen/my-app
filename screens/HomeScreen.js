import { SafeAreaView, StyleSheet, StatusBar, Button, View, Alert } from "react-native";
import image from "../assets/pokemon.webp";
import { ImageBackground } from "react-native";

import Header from "./../components/Header";
import Body from "../components/Body";


export default function HomeScreen({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <StatusBar />
          <Header />
          <Body />
          <View>
            <Button
              title="Go to Details"
              //Como segundo parámetro podemos pasar props a las Screens que vayamos a enlazar, 
              // en este caso le pasamos un id con el valor de 'textProp'
              onPress={() =>
                navigation.navigate("Details", {
                  id: "textProp",
                })
              }
            />
          </View>
        </ImageBackground>
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
});



