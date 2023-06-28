import { useState } from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PokéApp</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
    },
  text: {
    fontSize: 50,
    color: 'blue'
  },
});

{
  /* <SafeAreaView style={styles.container}>
  <StatusBar />
  <Text>Hello World!!!</Text>
</SafeAreaView>;

<View style={styles.container}>
      <Text>Hello World!!!</Text>
    </View>*/
}
