import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
  StatusBar,
  Platform,
  Dimensions,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("tExt pressed");

  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello World
      </Text>
      <Button
        title="Click Me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      ></Button>
      <TouchableWithoutFeedback>
        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri:
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
          }}
        />
      </TouchableWithoutFeedback>
      <Button
        title="Prompt"
        onPress={() =>
          Alert.prompt("My title ", "My msg", (text) => console.log(text))
        }
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
