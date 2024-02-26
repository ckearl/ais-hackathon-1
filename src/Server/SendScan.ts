import axios from "axios";

import { TScanData } from "../Types/db";

export default async function SendScan(data: TScanData) {
  const res = await axios.post("/InsertScan", data).then((res) => {
    return res;
  });

  return res;
}
