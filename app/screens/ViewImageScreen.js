import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors.js";
import fonts from "../config/fonts.js";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton}></View>
      <View style={styles.deleteButton}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/Gaming-Grace_wlogo-scaled.jpg")}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeButton: {
    width: 42,
    height: 42,
    backgroundColor: "#285e82",
    position: "absolute",
    top: 20,
    left: 20,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    width: 42,
    height: 42,
    backgroundColor: "#d11a2a",
    position: "absolute",
    top: 20,
    right: 20,
  },
  image: {
    width: "69%",
    height: "69%",
  },
});
