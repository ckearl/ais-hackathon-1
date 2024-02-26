import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Navbar from "../../Components/Nav";
import Home from "./Home";
import Dash from "./Dash";
import Settings from "./Settings";
import Code from "./Code";

export default function User() {
  const [currRoute, setCurrRoute] = React.useState("home");

  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.demo}>
          {currRoute === "home" && <Home />}
          {currRoute === "code" && <Code />}
          {currRoute === "dash" && <Dash />}
          {currRoute === "settings" && <Settings />}
        </View>
      </ScrollView>

      <Navbar currRoute={currRoute} setCurrRoute={setCurrRoute} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    height: "100%",
  },
  demo: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    marginBottom: 100,
  },
});
