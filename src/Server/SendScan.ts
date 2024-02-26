import axios from "axios";

import { TScanData } from "../Types/ScanData";
import Constants from "../Constants";

export default async function SendScan(data: TScanData) {
  const res = await axios.post("/scan", data).then((res) => {
    console.log("Scan sent");
    return res;
  });
  return res;
}
