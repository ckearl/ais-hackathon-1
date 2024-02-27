import { TAttemptLoginRes, TErrorRes } from "@BackendTypes/res";
import axios from "axios";

export default async function AttemptLogin(localNetId: string) {
  const netId = {
    netId: localNetId,
  };
  const data: TAttemptLoginRes | TErrorRes = (await axios.post(`/AttemptLogin`, netId)).data;
  return data;
}
