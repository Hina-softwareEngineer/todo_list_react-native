import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "Shopping List",
};

const styles = StyleSheet.create({
  header: {
    height: 85,
    paddingVertical: 23,
    paddingHorizontal: 0,
  },
  text: {
    color: "#fff",
    fontSize: 23,
    padding: 15,
    width: "100%",
    textAlign: "center",
    backgroundColor: "#9c27b0",
    fontFamily: "roboto-bold",
    letterSpacing: 1.2,
  },
});

export default Header;
