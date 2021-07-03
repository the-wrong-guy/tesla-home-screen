import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../TeslaAssets/assets/images/logo.png")}
      />
      <Image
        style={styles.menu}
        source={require("../../../TeslaAssets/assets/images/menu.png")}
      />
    </View>
  );
}
