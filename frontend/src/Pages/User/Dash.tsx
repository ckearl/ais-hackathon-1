import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "../../Styles";
import { EventHistory } from "../../Components/Events";
import UserContext from "../../Context/UserContext";
import constants from "../../Constants";

const eventTypeThresholds = constants.eventTypeThresholds;

function Punches() {
  const events = useContext(UserContext).user.events;
  const eventTypesAttended: { [key: string]: number } = {};

  events.forEach((event, i) => {
    eventTypesAttended[event.type] = (eventTypesAttended[event.type] || 0) + 1;
    eventTypesAttended["total"] = ((eventTypesAttended["total"] as number) || 0) + 1;
  });

  return (
    <View style={styles.punchContainer}>
      <View style={styles.w100}>
        <Text style={styles.h2}>Punch Progress</Text>
      </View>
      {Object.keys(eventTypeThresholds).map((type) => {
        console.log(type);

        const punchComplete = eventTypesAttended[type] >= eventTypeThresholds[type]?.threshold;

        const punchStyle = punchComplete
          ? { ...styles.punch, ...styles.punchComplete }
          : styles.punch;

        return (
          <View key={type} style={punchStyle}>
            <Text style={styles.h2}>{eventTypeThresholds[type].name}</Text>
            <Text style={styles.pCenter}>
              {eventTypesAttended[type]}/{eventTypeThresholds[type].threshold}
            </Text>
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
        <Text style={styles.h1}>User Dashboard</Text>
        <Punches />
        <View style={{ marginTop: 20 }}>
          <EventHistory />
        </View>
      </View>
    </ScrollView>
  );
}
