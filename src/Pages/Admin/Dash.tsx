import React, { useContext } from "react";
import { Text, View } from "react-native";
import styles from "../../Styles";
import EventContext from "../../Context/EventContext";

function Summary() {
  const eventSummaries = useContext(EventContext).eventSummaries;

  return (
    <View style={styles.page}>
      <Text style={styles.h1}>{JSON.stringify(eventSummaries)}</Text>
    </View>
  );
}

export default function Dash() {
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Dashboard</Text>
      <Text style={styles.subHeading}>View upcoming events</Text>
      <Text style={styles.subHeading}>Add new events</Text>
      <Summary />
    </View>
  );
}
