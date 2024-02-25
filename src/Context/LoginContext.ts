import { createContext } from "react";

const LoginContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => {},
  isAdmin: false,
  setIsAdmin: (value: boolean) => {},
});

export default LoginContext;
