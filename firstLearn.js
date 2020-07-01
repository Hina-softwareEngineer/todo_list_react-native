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
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const handlePress = () => console.log("tExt pressed");

  const { landscape } = useDeviceOrientation();

  console.log(Dimensions.get("screen"));
  console.log(useDimensions(), useDeviceOrientation());
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "red",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
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

      <View
        style={{
          backgroundColor: "green",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "dodgerblue",
            flex: 1,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "tomato",
            flex: 1,
          }}
        ></View>
      </View>
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
