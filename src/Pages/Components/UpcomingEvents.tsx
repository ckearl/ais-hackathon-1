import { useContext } from "react";
import EventContext from "../../Context/EventContext";
import { View, Text } from "react-native";
import { A } from "@expo/html-elements";
import { TEvent } from "../../Types/db";
import styles from "../../Styles";

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
    <View style={styles.outerEventsBox}>
      <Text style={styles.h2}>Upcoming Events</Text>
      <View style={styles.eventsContainer}>
        {upcomingEvents.map((event, i) => {
          return <EventBox key={i} event={event} />;
        })}
      </View>
    </View>
  );
}
