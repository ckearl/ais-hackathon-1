import { StyleSheet } from "react-native";
import useLogin from "../Hooks/useLogin";
import LogIn from "./Login";
import Root from "./Root";
import { useContext } from "react";
import LoginContext from "../Context/LoginContext";

export default function LoginRouter() {
  const { isLoggedIn, isAdmin } = useContext(LoginContext);
  if (isLoggedIn) {
    return <Root isAdmin={isAdmin} />;
  } else {
    return <LogIn />;
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
