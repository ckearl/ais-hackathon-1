import React from "react";
import { Text, View } from "react-native";

export default function Dash() {
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Dashboard</Text>
      <Text style={styles.p}>View upcoming events here</Text>
      <Text style={styles.p}>Add new events here</Text>
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
