import React, { useContext } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../../Styles";
import EventContext from "../../Context/EventContext";
import { A } from "@expo/html-elements";
import Constants from "../../Constants";

function EventSummaries() {
  const events = useContext(EventContext).eventSummaries.scansPerEvent;
  console.log(events);
  return (
    <View style={styles.eventsContainer}>
      <Text style={styles.h1}>Event History</Text>
      <Text style={styles.subHeading}>Last 5 Events</Text>
      {Object.keys(events).map((eventId, i) => {
        const event = events[eventId];
        return (
          <View key={i} style={styles.event}>
            <Text style={styles.h2}>{event.name}</Text>
            <Text style={styles.subHeading}>{new Date(event.date).toLocaleDateString()}</Text>
            <Text style={styles.pCenter}> attendees: {event.numScans}</Text>
          </View>
        );
      })}
    </View>
  );
}

function TotalAttendance() {
  const totalAttendance = useContext(EventContext).eventSummaries.totalAttendance;
  return (
    <View style={styles.eventsContainer}>
      <Text style={styles.h1}>Total Semester Attendance</Text>
      <Text style={styles.pCenter}>{totalAttendance}</Text>
    </View>
  );
}

function RaffleEligibleStudents() {
  const raffleEligibleStudents = useContext(EventContext).eventSummaries.raffleEligibleStudents;
  return (
    <View style={styles.eventsContainer}>
      <Text style={styles.h1}>Raffle Eligible Students</Text>
      {raffleEligibleStudents.length > 0 ? (
        raffleEligibleStudents.map((student, i) => {
          return (
            <Text key={i} style={styles.pCenter}>
              {student}
            </Text>
          );
        })
      ) : (
        <>
          <Text style={styles.pCenter}>
            No students are eligible for the raffle yet. Their names will appear here when they are
            eligible.
          </Text>
          <Text style={styles.pCenter}>
            Go to{" "}
            <A style={styles.a} href={Constants.API_STUDENT_RAFFLE_URL}>
              {Constants.API_STUDENT_RAFFLE_URL}
            </A>{" "}
            to download the list of eligible students.
          </Text>
        </>
      )}
    </View>
  );
}

function Summary() {
  return (
    <View>
      <TotalAttendance />
      <RaffleEligibleStudents />
      <EventSummaries />
    </View>
  );
}

export default function Dash() {
  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={styles.h1}>Dashboard</Text>
        <Text style={styles.subHeading}>View upcoming events</Text>
        <Text style={styles.subHeading}>Add new events</Text>
        <Summary />
      </View>
    </ScrollView>
  );
}
