import { TErrorRes, TGetUpcomingEventsRes } from "@BackendTypes/res";
import axios from "axios";

export default async function GetUpcomingEvents() {
  const data: TGetUpcomingEventsRes | TErrorRes = (await axios.get(`/GetUpcomingEvents`)).data;
  return data;
}
