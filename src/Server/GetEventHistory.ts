import axios from "axios";

export default async function GetEventHistory(netId: string) {
  const res = await axios.get(`/GetUserAttendance/${netId}`);
  return res;
}
