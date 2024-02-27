import React from "react";
import { Text, View } from "react-native";
import UpcomingEvents from "../Components/UpcomingEvents";
import styles from "../../Styles";

export default function Home() {
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Home</Text>
      <Text style={styles.subHeading}>Navigate to other pages</Text>
      <UpcomingEvents />
    </View>
  );
}
