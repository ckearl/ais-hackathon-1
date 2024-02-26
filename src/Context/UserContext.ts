import { createContext } from "react";
import { TUser } from "../Types/db";

type TUserContextType = {
  user: TUser;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  adminView: boolean;
  setAdminView: (value: boolean) => void;
};

const UserContext = createContext<TUserContextType>({
  user: {
    firstName: "",
    lastName: "",
    netId: "",
    dateCreated: 0,
    isAdmin: 0,
    scans: [],
    events: [],
  },

  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => {},
  isAdmin: false,
  setIsAdmin: (value: boolean) => {},
  adminView: false,
  setAdminView: (value: boolean) => {},
});

export default UserContext;
