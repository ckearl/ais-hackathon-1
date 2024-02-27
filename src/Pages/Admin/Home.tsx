import React from "react";
import { Text, View } from "react-native";
import styles from "../../Styles";
import { UpcomingEvents } from "../Components/Events";

export default function Home() {
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Home</Text>
      <UpcomingEvents />
    </View>
  );
}
