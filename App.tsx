import { StyleSheet, View } from "react-native";
import LoginRouter from "./src/Pages/LoginRouter";
import useLogin from "./src/Hooks/useLogin";
import UserContext from "./src/Context/UserContext";
import axios from "axios";
import Constants from "./src/Constants";

export default function App() {
  axios.defaults.baseURL = Constants.API_URL;
  axios.defaults.timeout = 5000;

  return (
    <View>
      <LoginRouter />
    </View>
  );
}
