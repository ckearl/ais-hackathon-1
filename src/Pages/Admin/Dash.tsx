import React from "react";
import { Text, View } from "react-native";
import styles from "../../Styles";

export default function Dash() {
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Dashboard</Text>
      <Text style={styles.subHeading}>View upcoming events</Text>
      <Text style={styles.subHeading}>Add new events</Text>
    </View>
  );
}
