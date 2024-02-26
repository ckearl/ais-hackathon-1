import React from "react";
import { Text, View } from "react-native";
import EventHistory from "../Components/EventHistory";

export default function Dash() {
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>User Dash</Text>
      <Text style={styles.p}>View your past attendance here</Text>
      <EventHistory />
    </View>
  );
}

const styles = {
  page: {
    display: "flex",
    alignItems: "center",
  },
  p: {
    paddingBottom: 10,
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
} as const;
