import { TDbScan } from "@BackendTypes/db";
import { TErrorRes, TSendScanRes } from "@BackendTypes/res";
import axios from "axios";

export default async function InsertScan(scan: TDbScan) {
  const data: TSendScanRes | TErrorRes = (await axios.post("/InsertScan", scan)).data;
  return data;
}
