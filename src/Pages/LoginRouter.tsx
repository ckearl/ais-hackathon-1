import LogIn from "./Login";
import Root from "./Root";
import useLogin from "../Hooks/useLogin";
import UserContext from "../Context/UserContext";
import EventContext from "../Context/EventContext";
import GetUpcomingEvents from "../API/GetUpcomingEvents";
import { useEffect, useState } from "react";
import { TDbEvent } from "@BackendTypes/db";
import { TEventSummaries } from "@BackendTypes/res";
import GetEventSummaries from "../API/GetEventSummaries";

export default function LoginRouter() {
  const userInfo = useLogin();
  const [upcomingEvents, setUpcomingEvents] = useState<TDbEvent[]>([]);
  const [eventSummaries, setEventSummary] = useState<TEventSummaries>({} as TEventSummaries);

  useEffect(() => {
    async function GetEventData() {
      const upcomingEventData = await GetUpcomingEvents();
      if (upcomingEventData.status === "success") {
        setUpcomingEvents(upcomingEventData.events);
      }
      const eventSummariesData = await GetEventSummaries();
      if (eventSummariesData.status === "success") {
        setEventSummary(eventSummariesData.eventSummaries);
      }
    }
    GetEventData();
  }, []);

  if (userInfo.isLoggedIn) {
    return (
      <EventContext.Provider value={{ upcomingEvents, eventSummaries }}>
        <UserContext.Provider value={userInfo}>
          <Root adminview={userInfo.adminView} />
        </UserContext.Provider>
      </EventContext.Provider>
    );
  } else {
    return <LogIn />;
  }
}
