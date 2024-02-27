import React from "react";
import { View, ScrollView } from "react-native";
import Navbar from "../Components/Nav";
import AdminHome from "./Admin/Home";
import UserHome from "./User/Home";
import AdminDash from "./Admin/Dash";
import UserDash from "./User/Dash";
import AdminSettings from "./Admin/Settings";
import UserSettings from "./User/Settings";
import AdminCode from "./Admin/Code";
import UserCode from "./User/Code";
import styles from "../Styles";

export default function Root({ adminview }: { adminview: boolean }) {
  const [currRoute, setCurrRoute] = React.useState("home");

  return (
    <View style={styles.h100}>
      <ScrollView style={styles.mainScrollView}>
        {currRoute === "home" && (adminview ? <AdminHome /> : <UserHome />)}
        {currRoute === "code" && (adminview ? <AdminCode /> : <UserCode />)}
        {currRoute === "dash" && (adminview ? <AdminDash /> : <UserDash />)}
        {currRoute === "settings" && (adminview ? <AdminSettings /> : <UserSettings />)}
      </ScrollView>

      <Navbar currRoute={currRoute} setCurrRoute={setCurrRoute} admin={adminview} />
    </View>
  );
}
