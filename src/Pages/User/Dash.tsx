import React, { useContext } from "react";
import { Text, View } from "react-native";
import styles from "../../Styles";
import { EventHistory } from "../Components/Events";
import UserContext from "../../Context/UserContext";

type TPunch = {
  [key: string]: number;
};

const punchGoals: TPunch = {
  discover: 4,
  connect: 3,
  socialize: 2,
  learn: 2,
  serve: 4,
};

function Punches() {
  const events = useContext(UserContext).user.events;
  const punchTotals: TPunch = events.reduce((acc, event) => {
    acc[event.type] = (acc[event.type] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  return (
    <View style={styles.punchContainer}>
      {Object.entries(punchTotals).map(([type, count]) => (
        <View key={type} style={styles.punch}>
          <Text style={styles.h2}>{type}</Text>
          <Text style={styles.pCenter}>
            {count}/{punchGoals[type]} punches
          </Text>

          {count < punchGoals[type] && (
            <Text style={styles.pCenter}>{punchGoals[type] - count} more to go!</Text>
          )}
        </View>
      ))}
    </View>
  );
}

export default function Dash() {
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Dashboard</Text>
      <Punches />
      <EventHistory />
    </View>
  );
}
