import React from "react";
import { Text, View, StyleSheet } from "react-native";

export function Navbar({ children }: { children: React.ReactNode }) {
  return <View style={navbarStyles.nav}>{children}</View>;
}

const navbarStyles = StyleSheet.create({
  nav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "row",
  },
});

export function NavItem({ children }: { children: React.ReactNode }) {
  return <View style={navItemStyles.item}>{children}</View>;
}

const navItemStyles = StyleSheet.create({
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "25%",
  },
});
