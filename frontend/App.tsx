import LoginRouter from "./src/Pages/LoginRouter";
import axios from "axios";
import Constants from "./src/Constants";

export default function App() {
  axios.defaults.baseURL = Constants.API_URL;

  return <LoginRouter />;
}
