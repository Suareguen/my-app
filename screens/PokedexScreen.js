import { Button, SafeAreaView } from "react-native";
import { View, Text } from "react-native";
import { useQuery } from "react-query";
import { FlatList } from "react-native";
import { getPokemons } from "../services/pokemonService";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function PokedexScreen({ navigation }) {
  const { isLoading, isError, data, error } = useQuery("pokemons", getPokemons);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }
  const Item = ({ name, url }) => (
    <View style={{ alignItems: "center", borderWidth: 1, margin: 5, padding: 5, backgroundColor: 'grey', borderRadius: 4 }}>
      <Text>{capitalizeFirstLetter(name)}</Text>
      <View>
        <Button
          title="See More Details"
          onPress={() =>
            navigation.navigate("Pokemon", {
              //url: url,
              name: name,
            })
          }
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        //Value props
        data={data.results}
        //Rendering item
        renderItem={({ item }) => <Item name={item.name} />}
        //Here we establlish the key prop
        keyExtractor={(item, idx) => idx.toString()}
        //horizontal={true}
      />
    </SafeAreaView>
  );
}
