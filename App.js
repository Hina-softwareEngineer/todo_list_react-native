import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  AccessibilityAnnouncementFinishedEventHandler,
  Alert,
} from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
import { uuid } from "uuidv4";

export default function App() {
  const [items, setItems] = useState([
    { id: uuid(), text: "Milk" },
    { id: uuid(), text: "Eggs" },
    { id: uuid(), text: "Bread" },
    { id: uuid(), text: "Juice" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (item) => {
    if (!text) {
      Alert.alert("Error", "Please enter an item", {
        text: "Ok",
      });
    } else {
      setItems((prevItems) => {
        return [...prevItems, { id: uuid(), text: item }];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />

      <AddItem addItem={addItem} />

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
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
    paddingTop: 60,
  },
});
