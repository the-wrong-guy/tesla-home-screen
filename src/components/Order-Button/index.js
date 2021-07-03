import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

export default function OrderButton({ btnType, onPress, btnText }) {
  const buttonColor = btnType === "primary" ? "#333237" : "#D6D3D4";
  const textColor = btnType === "primary" ? "#D6D3D4" : "#333237";
  return (
    <View style={styles.btnContainer}>
      <Pressable
        style={[styles.btn, { backgroundColor: buttonColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.btnText, { color: textColor }]}>{btnText}</Text>
      </Pressable>
    </View>
  );
}
