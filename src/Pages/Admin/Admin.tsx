import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Navbar from "../../Components/Nav";
import Home from "./Home";
import Dash from "./Dash";
import Settings from "./Settings";
import Code from "./Code";

export default function Admin() {
  const [currRoute, setCurrRoute] = React.useState("home");

  return (
    <View style={styles.page}>
      <ScrollView style={styles.demo}>
        {currRoute === "home" && <Home />}
        {currRoute === "code" && <Code />}
        {currRoute === "dash" && <Dash />}
        {currRoute === "settings" && <Settings />}
      </ScrollView>
      <Navbar setCurrRoute={setCurrRoute} currRoute={currRoute} admin={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    height: "100%",
  },
  demo: {
    height: "100%",
  },
});
