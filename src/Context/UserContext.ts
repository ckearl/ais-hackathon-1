import { createContext } from "react";

export type User = {
  name: string;
  netId: string;
  id: string;
};

type UserContextType = {
  user: User;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  adminView: boolean;
  setAdminView: (value: boolean) => void;
};

const UserContext = createContext<UserContextType>({
  user: {
    name: "",
    netId: "",
    id: "",
  },
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => {},
  isAdmin: false,
  setIsAdmin: (value: boolean) => {},
  adminView: false,
  setAdminView: (value: boolean) => {},
});

export default UserContext;
