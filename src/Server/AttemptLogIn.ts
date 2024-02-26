import axios from "axios";

export default async function AttemptLogIn(localNetId: string) {
  const data = {
    netId: localNetId,
  };
  const res = await axios.post(`/AttemptLogin`, data);
  return res;
}
