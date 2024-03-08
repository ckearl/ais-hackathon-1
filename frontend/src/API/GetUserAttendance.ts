import { TErrorRes, TGetUserAttendanceRes } from "@BackendTypes/res";
import axios from "axios";

export default async function GetUserAttendance(netId: string) {
  const data: TGetUserAttendanceRes | TErrorRes = (await axios.get(`/GetUserAttendance/${netId}`))
    .data;
  return data;
}
