import React from "react";
import { Text, View, ImageBackground } from "react-native";
import OrderButton from "../Order-Button/index";
import styles from "./style";

export default function CarItem({ car, tagline, img, taglineCTA }) {
  return (
    <View style={styles.carItem}>
      <ImageBackground source={img} style={styles.backgroundImg} />
      <View style={styles.textContainer}>
        <Text style={styles.header}>{car}</Text>
        <Text style={styles.tagline}>
          {tagline}
          <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <OrderButton
          btnType='primary'
          btnText='Custom Order'
          onPress={() => console.log("Order btn")}
        />
        <OrderButton
          btnType='secondary'
          btnText='Existing Inventory'
          onPress={() => console.log("existing btn")}
        />
      </View>
    </View>
  );
}
