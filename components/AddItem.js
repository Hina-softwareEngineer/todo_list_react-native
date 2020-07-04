import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");

  const onChange = (textValue) => setText(textValue);
  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        onChangeText={onChange}
        value={text}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText("");
          Keyboard.dismiss();
        }}
      >
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          &nbsp;&nbsp;Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "roboto-regular",
  },
});

export default AddItem;
