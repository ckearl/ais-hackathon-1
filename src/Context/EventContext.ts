import { createContext } from "react";
import { TEvent } from "../Types/db";

type TEventContextType = {
  upcomingEvents: TEvent[];
};

const EventContext = createContext<TEventContextType>({
  upcomingEvents: [],
});

export default EventContext;
