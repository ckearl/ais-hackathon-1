import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import styles from "../Styles";
const scanIcon = require("../Lib/Img/Icon/qr-code.png");
const homeIcon = require("../Lib/Img/Icon/home.png");
const settingsIcon = require("../Lib/Img/Icon/settings.png");
const dashIcon = require("../Lib/Img/Icon/dashboard.png");

type TnavbarProps = {
  currRoute: string;
  setCurrRoute: React.Dispatch<React.SetStateAction<string>>;
  admin: boolean;
};

export default function Navbar({ currRoute, setCurrRoute, admin }: TnavbarProps) {
  const backgroundColor = admin ? "purple" : "blue";
  return (
    <View style={{ ...styles.nav, backgroundColor }}>
      <NavItem route={"home"} icon={homeIcon} currRoute={currRoute} setCurrRoute={setCurrRoute} />
      <NavItem route={"scan"} icon={scanIcon} currRoute={currRoute} setCurrRoute={setCurrRoute} />
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

function NavItem({ route, icon, currRoute, setCurrRoute }: TNavItemProps) {
  const backgroundColor = currRoute === route ? "black" : "transparent";
  return (
    <View style={{ ...styles.navItem, backgroundColor }}>
      <TouchableOpacity style={styles.navImgBg} onPress={() => setCurrRoute(route)}>
        <Image source={icon} style={styles.navImg} />
      </TouchableOpacity>
    </View>
  );
}
