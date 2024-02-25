import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavItem, Navbar } from "../../Components/Nav";
import Home from "./Home";
import Scan from "./Scan";
import Dash from "./Dash";
import Settings from "./Settings";
const icon = require("../../icon.png");

export default function Admin() {
  const [currRoute, setCurrRoute] = React.useState("home");

  return (
    <View style={styles.page}>
      <View style={styles.demo}>
        {currRoute === "home" && <Home />}
        {currRoute === "scan" && <Scan />}
        {currRoute === "dash" && <Dash />}
        {currRoute === "settings" && <Settings />}
      </View>

      <Navbar>
        <NavItem route={"home"} icon={icon} currRoute={currRoute} setCurrRoute={setCurrRoute} />
        <NavItem route={"scan"} icon={icon} currRoute={currRoute} setCurrRoute={setCurrRoute} />
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
