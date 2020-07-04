import React, { useState } from "react";
import { View, FlatList, StyleSheet, Alert, StatusBar } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-bold": require("./assets/Fonts/Roboto/Roboto-Bold.ttf"),
    "roboto-italic": require("./assets/Fonts/Roboto/Roboto-Italic.ttf"),
    "roboto-regular": require("./assets/Fonts/Roboto/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [items, setItems] = useState([
    {
      id:
        Math.random().toString(36).substr(2, 11) +
        Math.random().toString(36).substr(2, 11),
      text: "Milk",
    },
    {
      id:
        Math.random().toString(36).substr(2, 11) +
        Math.random().toString(36).substr(2, 11),
      text: "Eggs",
    },
    {
      id:
        Math.random().toString(36).substr(2, 11) +
        Math.random().toString(36).substr(2, 11),
      text: "Bread",
    },
    {
      id:
        Math.random().toString(36).substr(2, 11) +
        Math.random().toString(36).substr(2, 11),
      text: "Juice",
    },
  ]);

  const [dataLoaded, setDataLoaded] = useState(false);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  console.log(items);

  const addItem = (item) => {
    if (!item) {
      Alert.alert("Error", "Please enter an item", {
        text: "Ok",
      });
    } else {
      setItems((prevItems) => {
        return [
          ...prevItems,
          {
            id:
              Math.random().toString(36).substr(2, 11) +
              Math.random().toString(36).substr(2, 11),
            text: item,
          },
        ];
      });
    }
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#6a0080"
        barStyle="light-content"
      />

      <Header title="Shopping List" />

      <AddItem addItem={addItem} />

      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <ListItem item={item} index={index} deleteItem={deleteItem} />
        )}
      />

      {/* <Text style={styles.text}>Hello World</Text>
      <Image
        source={{
          uri:
            "https://media.gettyimages.com/photos/sunset-at-a-mountain-pasture-over-garmischpartenkirchen-picture-id963717812?s=612x612",
        }}
        style={styles.img}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
