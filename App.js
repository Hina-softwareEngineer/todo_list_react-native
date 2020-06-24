import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("tExt pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello World{" "}
      </Text>
      <Button title="Click Me"></Button>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
