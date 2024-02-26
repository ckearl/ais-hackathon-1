import LogIn from "./Login";
import Root from "./Root";
import useLogin from "../Hooks/useLogin";
import UserContext from "../Context/UserContext";
import EventContext from "../Context/EventContext";
import GetUpcomingEvents from "../Server/GetUpcomingEvents";
import { useEffect, useState } from "react";

export default function LoginRouter() {
  const userInfo = useLogin();

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  useEffect(() => {
    GetUpcomingEvents().then((res) => {
      if (res.status === 200) {
        console.log(res.data.events);
        setUpcomingEvents(res.data.events);
      }
    });
  }, []);

  if (userInfo.isLoggedIn) {
    return (
      <EventContext.Provider value={{ upcomingEvents }}>
        <UserContext.Provider value={userInfo}>
          <Root adminview={userInfo.adminView} />
        </UserContext.Provider>
      </EventContext.Provider>
    );
  } else {
    return <LogIn />;
  }
}
