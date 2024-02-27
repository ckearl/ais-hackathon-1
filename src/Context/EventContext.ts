import { TDbEvent } from "@BackendTypes/db";
import { TEventSummaries } from "@BackendTypes/res";
import { createContext } from "react";

type TEventContextType = {
  upcomingEvents: TDbEvent[];
  eventSummaries: TEventSummaries;
};

const EventContext = createContext<TEventContextType>({
  upcomingEvents: [],
  eventSummaries: {} as TEventSummaries,
});

export default EventContext;
