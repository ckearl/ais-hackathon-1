import { TDbEvent } from "@BackendTypes/db";
import { TEventSummaries } from "@BackendTypes/res";
import { createContext } from "react";

type TEventContextType = {
  upcomingEvents: TDbEvent[];
  eventSummaries: TEventSummaries;
  refreshEventInfo: boolean;
  setRefreshEventInfo: (value: boolean) => void;
};

const EventContext = createContext<TEventContextType>({
  upcomingEvents: [],
  eventSummaries: {} as TEventSummaries,
  refreshEventInfo: false,
  setRefreshEventInfo: (value: boolean) => {},
});

export default EventContext;
