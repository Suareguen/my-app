import { Button, Image } from "react-native";
import { View, Text } from "react-native";

export function PokemonScreenFake({ navigation, route }) {

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
          borderWidth: 3,
          margin: 5,
          padding: 5,
          backgroundColor: "grey",
          borderRadius: 4,
        }}
      >
        <Text>Pokedex</Text>
      </View>
    </>
  );
}
