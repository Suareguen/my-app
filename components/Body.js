import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
} from "react-native";

// The View component is the primary component for building UIs. It acts as a wrapper in which we will include every application component.
// Think of Views as a <div> element in HTML with a few differences.

export default function Body() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
        <View style={styles.text}>
            <Text>Hello: {text}</Text>
        </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setText} value={text} placeholder="Your name here!!!" />
      </View>
      <View style={styles.button}>
        <Button title="Press me" onPress={() => Alert.alert(`Hello: ${text}`)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    alignItems: 'center',
    width: '90%'
  },
  input: {
    borderWidth: 1,
    margin: 10,
  },
  inputContainer: {
    width: '75%'

  },
  text: {
    alignContent: 'center'
  },button: {
    width: '30%'
  }
});
