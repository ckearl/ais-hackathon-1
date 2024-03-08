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
  const [upcomingEvents, setUpcomingEvents] = useState<TDbEvent[]>([]);
  const [eventSummaries, setEventSummaries] = useState<TEventSummaries>({} as TEventSummaries);
  const [refreshLogin, setRefreshLogin] = useState(false);
  const [refreshEventInfo, setRefreshEventInfo] = useState(false);
  const userInfo = useLogin(refreshLogin);

  // uncomment to test login functionality for first-time users
  // useEffect(() => {
  //   Save("netId", "");
  // }, []);

  useEffect(() => {
    async function GetEventData() {
      const upcomingEventData = await GetUpcomingEvents();
      if (upcomingEventData.status === "success") {
        setUpcomingEvents(upcomingEventData.events);
      }
      const eventSummariesData = await GetEventSummaries();
      if (eventSummariesData.status === "success") {
        setEventSummaries(eventSummariesData.eventSummaries);
      }
    }
    GetEventData();
  }, [refreshEventInfo]);

  if (userInfo.isLoggedIn) {
    return (
      <EventContext.Provider
        value={{ upcomingEvents, eventSummaries, refreshEventInfo, setRefreshEventInfo }}
      >
        <UserContext.Provider value={{ ...userInfo, refreshLogin, setRefreshLogin }}>
          <Root adminview={userInfo.adminView} />
        </UserContext.Provider>
      </EventContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={{ ...userInfo, refreshLogin, setRefreshLogin }}>
        <LogIn />
      </UserContext.Provider>
    );
  }
}
