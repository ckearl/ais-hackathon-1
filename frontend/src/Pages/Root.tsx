import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import Navbar from "../Components/Nav";
import AdminHome from "./Admin/Home";
import UserHome from "./User/Home";
import AdminDash from "./Admin/Dash";
import UserDash from "./User/Dash";
import AdminSettings from "./Admin/Settings";
import UserSettings from "./User/Settings";
import AdminScan from "./Admin/Scan";
import UserScan from "./User/Scan";
import styles from "../Styles";

export default function Root({ adminview }: { adminview: boolean }) {
  const [currRoute, setCurrRoute] = useState("home");

  return (
    <View style={styles.rootContainer}>
      <View style={styles.h90}>
        {currRoute === "home" && (adminview ? <AdminHome /> : <UserHome />)}
        {currRoute === "scan" && (adminview ? <AdminScan /> : <UserScan />)}
        {currRoute === "dash" && (adminview ? <AdminDash /> : <UserDash />)}
        {currRoute === "settings" && (adminview ? <AdminSettings /> : <UserSettings />)}
      </View>
      <Navbar currRoute={currRoute} setCurrRoute={setCurrRoute} admin={adminview} />
    </View>
  );
}
