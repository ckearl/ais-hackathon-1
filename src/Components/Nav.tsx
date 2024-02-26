import React from "react";
import { Text, View, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
const icon = require("../Lib/Img/Icon/icon.png");
const codeIcon = require("../Lib/Img/Icon/qr-code.png");
const homeIcon = require("../Lib/Img/Icon/home.png");
const settingsIcon = require("../Lib/Img/Icon/settings.png");
const dashIcon = require("../Lib/Img/Icon/dashboard.png");

type TnavbarProps = {
  currRoute: string;
  setCurrRoute: React.Dispatch<React.SetStateAction<string>>;
  admin?: boolean;
};

export default function Navbar({ currRoute, setCurrRoute, admin = false }: TnavbarProps) {
  const navbarStyles = StyleSheet.create({
    nav: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      backgroundColor: admin ? "purple" : "blue",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
  });
  return (
    <View style={navbarStyles.nav}>
      <NavItem route={"home"} icon={homeIcon} currRoute={currRoute} setCurrRoute={setCurrRoute} />
      <NavItem route={"code"} icon={codeIcon} currRoute={currRoute} setCurrRoute={setCurrRoute} />
      <NavItem route={"dash"} icon={dashIcon} currRoute={currRoute} setCurrRoute={setCurrRoute} />
      <NavItem
        route={"settings"}
        icon={settingsIcon}
        currRoute={currRoute}
        setCurrRoute={setCurrRoute}
      />
    </View>
  );
}

type TNavItemProps = {
  route: string;
  icon: any;
  currRoute: string;
  setCurrRoute: React.Dispatch<React.SetStateAction<string>>;
};

export function NavItem({ route, icon, currRoute, setCurrRoute }: TNavItemProps) {
  let itemStyle: any = navItemStyles.item;
  if (currRoute === route) {
    itemStyle = { ...itemStyle, backgroundColor: "black" };
  }
  return (
    <View style={itemStyle}>
      <TouchableOpacity style={navItemStyles.imgBg} onPress={() => setCurrRoute(route)}>
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
    paddingTop: 10,
    paddingBottom: 25,
  },
  img: {
    width: 40,
    height: 40,
  },
  imgBg: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 50,
  },
});
