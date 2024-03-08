import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "../../Styles";
import { EventHistory } from "../../Components/Events";
import UserContext from "../../Context/UserContext";
import { TEventTypeThresholds } from "@BackendTypes/db";

//if you update these values, don't forget to update the backend as well.
const eventTypeThresholds: TEventTypeThresholds = {
  socialize: 2,
  learn: 2,
  serve: 4,
  discover: 4,
  connect: 3,
};

function Punches() {
  const events = useContext(UserContext).user.events;
  const punchTotals: TEventTypeThresholds = events.reduce((acc, event) => {
    acc[event.type] = (acc[event.type] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  return (
    <View style={styles.punchContainer}>
      {Object.entries(punchTotals).map(([type, count]) => {
        const punchComplete = count >= eventTypeThresholds[type];
        const punchStyle = punchComplete
          ? { ...styles.punch, ...styles.punchComplete }
          : styles.punch;
        return (
          <View key={type} style={punchStyle}>
            <Text style={styles.h2}>{type}</Text>
            <Text style={styles.pCenter}>
              {count}/{eventTypeThresholds[type]} punches
            </Text>

            {!punchComplete && (
              <Text style={styles.pCenter}>{eventTypeThresholds[type] - count} more to go!</Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

export default function Dash() {
  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={styles.h1}>Dashboard</Text>
        <Punches />
        <EventHistory />
      </View>
    </ScrollView>
  );
}
