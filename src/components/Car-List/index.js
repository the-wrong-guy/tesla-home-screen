import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import CarItem from "../Car-Item/carItem";
import cars from "./cars";
import styles from "./styles";

export default function CarList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <CarItem
            key={item.name}
            car={item.name}
            tagline={item.tagline}
            img={item.image}
            taglineCTA={item.taglineCTA}
          />
        )}
        horizontal={false}
        decelerationRate='fast'
        snapToAlignment={"center"}
        snapToInterval={Dimensions.get("screen").height}
      />
    </View>
  );
}
