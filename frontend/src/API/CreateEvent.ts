import { TCreateEvent, TErrorRes } from "@BackendTypes/res";
import axios from "axios";

type TCreateEventData = {
  title: string;
  type: string;
  notes: string;
  startTime: Date;
  endTime: Date;
  location: string;
  createdBy: string;
  waiverUrl: string;
};

export async function CreateEvent(params: TCreateEventData) {
  const data: TCreateEvent | TErrorRes = (await axios.post("/CreateEvent", params)).data;
  return data;
}
