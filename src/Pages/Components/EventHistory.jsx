import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import UserContext from "../../Context/UserContext";

export default function EventHistory() {
  const { events } = useContext(UserContext).user;

  return (
    <View styles={styles.component}>
      <Text style={styles.h1}>Event History</Text>
      {events.map((event, i) => {
        const eventDate = new Date(event.startTime).toDateString();
        const eventTime = new Date(event.startTime).toLocaleTimeString();
        return (
          <View key={i}>
            <Text style={styles.h1}>{event.title}</Text>
            <Text style={styles.p}>{eventDate}</Text>
            <Text style={styles.p}>{eventTime}</Text>
            <Text style={styles.p}>{eventTime}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    padding: 10,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  p: {
    fontSize: 16,
    textAlign: "center",
  },
});
