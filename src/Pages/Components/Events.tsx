import { useContext } from "react";
import EventContext from "../../Context/EventContext";
import { View, Text } from "react-native";
import { A } from "@expo/html-elements";
import styles from "../../Styles";
import UserContext from "../../Context/UserContext";
import { TDbEvent } from "@BackendTypes/db";

export function EventBox({ event }: { event: TDbEvent }) {
  const eventDate = new Date(event.startTime).toDateString();
  const eventTime = new Date(event.startTime).toLocaleTimeString();

  return (
    <View style={styles.event}>
      <Text style={styles.h1}>{event.title}</Text>
      <Text style={styles.p}>{eventDate}</Text>
      <Text style={styles.p}>{eventTime}</Text>
      <Text style={styles.p}>{event.location}</Text>
      <Text style={styles.p}>{event.type}</Text>
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

export function EventsContainer({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <View style={styles.outerEventsBox}>
      <Text style={styles.h2}>{title}</Text>
      <View style={styles.eventsContainer}>{children}</View>
    </View>
  );
}

export function EventHistory() {
  const events = useContext(UserContext).user.events;

  return (
    <EventsContainer title="Event History">
      {events.map((event, i) => (
        <EventBox key={i} event={event} />
      ))}
    </EventsContainer>
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
