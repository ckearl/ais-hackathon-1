import { useContext } from "react";
import EventContext from "../../Context/EventContext";
import { View, Text } from "react-native";

export default function UpcomingEvents() {
  const upcomingEvents = useContext(EventContext).upcomingEvents;

  return (
    <View>
      <Text style={styles.h1}>Upcoming Events</Text>

      {upcomingEvents.map((event, i) => {
        return <Text key={i}>{event.title}</Text>;
      })}
    </View>
  );
}

const styles = {
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
} as const;
