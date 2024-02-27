import { TDbUser } from "@BackendTypes/db";
import { createContext } from "react";

export type TUser = TDbUser & {
  scans: any[];
  events: any[];
};

export type TUserContextType = {
  user: TUser;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  adminView: boolean;
  setAdminView: (value: boolean) => void;
};

const UserContext = createContext<TUserContextType>({
  user: {} as TUser,
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => {},
  isAdmin: false,
  setIsAdmin: (value: boolean) => {},
  adminView: false,
  setAdminView: (value: boolean) => {},
});

export default UserContext;
