import { useContext } from "react";
import EventContext from "../../Context/EventContext";
import { View, Text } from "react-native";
import { A } from "@expo/html-elements";
import { TEvent } from "../../Types/db";

export function EventBox({ event }: { event: TEvent }) {
  const eventDate = new Date(event.startTime).toDateString();
  const eventTime = new Date(event.startTime).toLocaleTimeString();

  return (
    <View style={styles.event}>
      <Text style={styles.h1}>{event.title}</Text>
      <Text style={styles.p}>{eventDate}</Text>
      <Text style={styles.p}>{eventTime}</Text>
      <Text style={styles.p}>{event.location}</Text>
      {event.waiverUrl && (
        <>
          <Text style={styles.h1}>Sign waver here:</Text>
          <A style={styles.a} href={event.waiverUrl}>
            {event.waiverUrl}
          </A>
        </>
      )}
    </View>
  );
}

export default function UpcomingEvents() {
  const upcomingEvents = useContext(EventContext).upcomingEvents;

  return (
    <View>
      <Text style={styles.h1}>Upcoming Events</Text>

      {upcomingEvents.map((event, i) => {
        return <EventBox key={i} event={event} />;
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
  p: {
    paddingBottom: 10,
  },
  event: {
    padding: 20,
    margin: 10,
    backgroundColor: "lightgray",
    minWidth: "70%",
  },
  a: {
    color: "blue",
  },
} as const;
