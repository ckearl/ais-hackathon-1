import { TErrorRes, TGetEventSummariesRes } from "@BackendTypes/res";
import axios from "axios";

export default async function GetEventSummaries() {
  const data: TGetEventSummariesRes | TErrorRes = (await axios.get("/GetEventSummaries")).data;
  return data;
}
