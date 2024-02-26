import LogIn from "./Login";
import Root from "./Root";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

export default function LoginRouter() {
  const { isLoggedIn, adminView } = useContext(UserContext);
  if (isLoggedIn) {
    return <Root adminview={adminView} />;
  } else {
    return <LogIn />;
  }
}
