import React from "react";
import { Text, View, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

export function Navbar({ children }: { children: React.ReactNode }) {
  return <View style={navbarStyles.nav}>{children}</View>;
}

const navbarStyles = StyleSheet.create({
  nav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

type TNavItemProps = {
  route: string;
  icon: any;
  currRoute: string;
  setCurrRoute: React.Dispatch<React.SetStateAction<string>>;
};

export function NavItem({ route, icon, currRoute, setCurrRoute }: TNavItemProps) {
  let itemStyle: any = navItemStyles.item;
  if (currRoute === route) {
    itemStyle = { ...itemStyle, backgroundColor: "lightblue" };
  }
  return (
    <View style={itemStyle}>
      <TouchableOpacity onPress={() => setCurrRoute(route)}>
        <Image source={icon} style={navItemStyles.img} />
      </TouchableOpacity>
    </View>
  );
}

const navItemStyles = StyleSheet.create({
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: 15,
  },
  img: {
    width: 50,
    height: 50,
  },
});
