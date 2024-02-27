import React from "react";
import { Text, View } from "react-native";
import { UpcomingEvents } from "../Components/Events";
import styles from "../../Styles";

export default function Home() {
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Home</Text>
      <UpcomingEvents />
    </View>
  );
}
