import React from "react";
import { Text, View } from "react-native";

export default function Dash() {
  return (
    <View style={styles.page}>
      <Text style={styles.p}>View your past attendance here</Text>
      <Text style={styles.p}>View upcoming events here</Text>
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
} as const;
