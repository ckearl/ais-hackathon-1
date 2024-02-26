import LogIn from "./Login";
import Root from "./Root";
import { useContext } from "react";
import LoginContext from "../Context/LoginContext";

export default function LoginRouter() {
  const { isLoggedIn, adminView } = useContext(LoginContext);
  if (isLoggedIn) {
    return <Root adminview={adminView} />;
  } else {
    return <LogIn />;
  }
}
