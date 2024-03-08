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
import { Save } from "../SecureStore";

export default function LoginRouter() {
  const [upcomingEvents, setUpcomingEvents] = useState<TDbEvent[]>([]);
  const [eventSummaries, setEventSummaries] = useState<TEventSummaries>({} as TEventSummaries);
  const [attemptedLogin, setAttemptedLogin] = useState(false);
  const userInfo = useLogin(attemptedLogin);

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
    return (
      <UserContext.Provider value={userInfo}>
        <LogIn attemptedLogin={attemptedLogin} setAttemptedLogin={setAttemptedLogin} />
      </UserContext.Provider>
    );
  }
}
