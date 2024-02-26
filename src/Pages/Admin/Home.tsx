import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Admin Home</Text>
      <Text style={styles.p}>Navigate to other pages</Text>
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
