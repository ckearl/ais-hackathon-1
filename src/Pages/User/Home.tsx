import React from "react";
import { Text, View } from "react-native";
import UpcomingEvents from "../Components/UpcomingEvents";

export default function Home() {
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>User Home</Text>
      <Text style={styles.p}>Navigate to other pages</Text>
      <UpcomingEvents />
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
