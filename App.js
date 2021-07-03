import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Dimensions,
} from "react-native";
import CarList from "./src/components/Car-List";
import Header from "./src/components/Header";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
      }}
    >
      <StatusBar style={{ background: "green" }} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          height: Dimensions.get("window").height - Constants.statusBarHeight,
        }}
      >
        <Header />
        <CarList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
});
