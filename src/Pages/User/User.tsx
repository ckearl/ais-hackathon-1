import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Navbar, NavItem } from "../../Components/Nav";
import Home from "./Home";
import Dash from "./Dash";
import Settings from "./Settings";
import Code from "./Code";
const icon = require("../../icon.png");

export default function User() {
  const [currRoute, setCurrRoute] = React.useState("home");

  return (
    <View style={styles.page}>
      <View style={styles.demo}>
        {currRoute === "home" && <Home />}
        {currRoute === "code" && <Code />}
        {currRoute === "dash" && <Dash />}
        {currRoute === "settings" && <Settings />}
      </View>

      <Navbar>
        <NavItem route={"home"} icon={icon} currRoute={currRoute} setCurrRoute={setCurrRoute} />
        <NavItem route={"code"} icon={icon} currRoute={currRoute} setCurrRoute={setCurrRoute} />
        <NavItem route={"dash"} icon={icon} currRoute={currRoute} setCurrRoute={setCurrRoute} />
        <NavItem route={"settings"} icon={icon} currRoute={currRoute} setCurrRoute={setCurrRoute} />
      </Navbar>
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
  },
});
