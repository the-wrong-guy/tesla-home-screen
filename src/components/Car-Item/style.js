import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carItem: {
    backgroundColor: "#fff",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  header: {
    fontSize: 40,
    color: "hsl(218,7%,24%)",
    fontWeight: "700",
    marginTop: "30%",
    textAlign: "center",
  },
  tagline: {
    color: "hsl(228,3%,37%)",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
  },
  taglineCTA: {
    textDecorationLine: "underline",
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  btnContainer: {
    width: "100%",
    marginTop: "auto",
    marginBottom: 30,
  },
});

export default styles;
