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
  failedLoginAttempt: boolean;
  setFailedLoginAttempt: (value: boolean) => void;
  refreshLogin: boolean;
  setRefreshLogin: (value: boolean) => void;
};

const UserContext = createContext<TUserContextType>({
  user: {} as TUser,
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => {},
  isAdmin: false,
  setIsAdmin: (value: boolean) => {},
  adminView: false,
  setAdminView: (value: boolean) => {},
  failedLoginAttempt: false,
  setFailedLoginAttempt: (value: boolean) => {},
  refreshLogin: false,
  setRefreshLogin: (value: boolean) => {},
});

export default UserContext;
