import React from "react";
import { Text } from "react-native";
import Admin from "./Admin/Admin";
import User from "./User/User";

export default function Root({ admin }: { admin: boolean }) {
  if (admin) {
    return <Admin />;
  } else {
    return <User />;
  }
}
