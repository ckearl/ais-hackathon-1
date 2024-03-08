import { useContext } from "react";
import EventContext from "../Context/EventContext";
import { View, Text } from "react-native";
import { A } from "@expo/html-elements";
import styles from "../Styles";
import UserContext from "../Context/UserContext";
import { TDbEvent } from "@BackendTypes/db";

export function EventBox({ event }: { event: TDbEvent }) {
  return (
    <View style={styles.event}>
      <Text style={styles.h3}>{event.title}</Text>
      <Text>Date: {new Date(event.startTime).toLocaleDateString()}</Text>
      <Text>Time: {new Date(event.startTime).toLocaleTimeString()} </Text>
      <Text>Location: {event.location} </Text>
      <Text>Event type: {event.type}</Text>
      {event.waiverUrl && (
        <Text>
          Waiver:{" "}
          <A href={event.waiverUrl} target="_blank" rel="noreferrer" style={styles.a}>
            {event.waiverUrl}
          </A>
        </Text>
      )}
    </View>
  );
}

export function EventsContainer({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <View>
      <Text style={styles.h2}>{title}</Text>
      <View>{children}</View>
    </View>
  );
}

export function EventHistory() {
  const events = useContext(UserContext).user.events;

  return (
    <View>
      <Text style={styles.h2}>Event History</Text>
      {events.map((event, i) => (
        <EventBox key={i} event={event} />
      ))}
    </View>
  );
}

export function UpcomingEvents() {
  const upcomingEvents = useContext(EventContext).upcomingEvents;
  return (
    <EventsContainer title="Upcoming Events">
      {upcomingEvents.map((event, i) => (
        <EventBox key={i} event={event} />
      ))}
    </EventsContainer>
  );
}
