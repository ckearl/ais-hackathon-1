import axios from "axios";

export default async function GetUpcomingEvents() {
  const res = await axios.get(`/GetUpcomingEvents`);
  return res;
}
