import React from "react";
import {
  Image,
  ImageBackground,
  ImageBackgroundBase,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts } from "expo-font";

import { fontsRequired } from "../config/fonts";
import colors from "../config/colors";

function WelcomeScreen(props) {
  let [fontsLoaded] = useFonts(fontsRequired);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <View style={styles.background}>
        <Image
          style={styles.logo}
          source={require("../assets/logo_piperjdrake.png")}
          resizeMode="contain"
        />
        <View style={styles.flavorText}>
          <Text style={styles.flavorText}>"The dog lives, always."</Text>
          <Text style={[styles.flavorText, { textAlign: "right" }]}>
            - Piper J &nbsp;
          </Text>
        </View>
        <View style={styles.registerButton}>
          <Text style={[styles.basicText, styles.basicTextHighlight]}>
            {" "}
            Register{" "}
          </Text>
        </View>
        <View style={styles.loginButton}>
          <Text style={styles.basicText}> Login &nbsp; </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  basicText: {
    fontFamily: "boldP",
    fontSize: 27,
    textShadowColor: colors.darkGrayP,
    textShadowRadius: 1.5,
    color: colors.white,
  },
  basicTextHighlight: {
    color: colors.white,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.white,
    fontFamily: "primary",
    // "https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap",
    // "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300&family=Montserrat:ital@1&display=swap",
  },
  flavorText: {
    bottom: 10,
    fontFamily: "italicP",
    fontSize: 22,
  },
  logo: {
    position: "absolute",
    top: -50,
    height: "90%",
    width: "90%",
  },
  loginButton: {
    backgroundColor: colors.black,
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  registerButton: {
    backgroundColor: colors.primary,
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomeScreen;
