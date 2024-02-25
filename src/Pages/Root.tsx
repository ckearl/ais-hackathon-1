import React from "react";
import { View } from "react-native";
import Admin from "./Admin/Admin";
import User from "./User/User";

export default function Root({ isAdmin }: { isAdmin: boolean }) {
  return (
    <View>
      <View>{isAdmin ? <Admin /> : <User />}</View>
    </View>
  );
}
