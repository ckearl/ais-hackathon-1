import { StyleSheet } from "react-native";
import useLogin from "./Hooks/useLogin";
import LogIn from "./LogIn";
import Root from "./Root";

export default function LoginRouter() {
  const { loggedIn, admin } = useLogin();

  if (loggedIn) {
    return <Root admin={admin} />;
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
