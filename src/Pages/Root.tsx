import React from "react";
import { View } from "react-native";
import Admin from "./Admin/Admin";
import User from "./User/User";

export default function Root({ adminview }: { adminview: boolean }) {
  return (
    <View>
      <View>{adminview ? <Admin /> : <User />}</View>
    </View>
  );
}
