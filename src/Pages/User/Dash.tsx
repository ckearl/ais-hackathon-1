import Reac from "react";
import { Text, View } from "react-native";
import EventHistory from "../Components/EventHistory";

export default function Dash() {
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>User Dash</Text>
      <EventHistory />
    </View>
  );
}

const styles = {
  page: {
    display: "flex",
    alignItems: "center",
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
} as const;
