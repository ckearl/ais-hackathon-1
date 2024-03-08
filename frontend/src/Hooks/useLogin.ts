import { useEffect, useState } from "react";
import AttemptLogin from "../API/AttemptLogin";
import GetEventHistory from "../API/GetUserAttendance";
import { Load } from "../SecureStore";
import { TUser } from "../Context/UserContext";

export default function useLogin(refreshLogin: boolean) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminView, setAdminView] = useState(false);
  const [user, setUser] = useState<TUser>({} as TUser);
  const [failedLoginAttempt, setFailedLoginAttempt] = useState(false);

  useEffect(() => {
    async function GetUserData() {
      const netId = await Load("netId");

      if (!netId) return;

      const loginData = await AttemptLogin(netId);

      if (loginData.status !== "success") {
        setFailedLoginAttempt(true);
        return;
      }

      setIsLoggedIn(true);

      if (loginData.user.isAdmin === 1) {
        setIsAdmin(true);
        setAdminView(true);
      }

      const eventData = await GetEventHistory(netId);

      if (eventData.status !== "success") return;

      const newUserData: TUser = {
        ...loginData.user,
        scans: eventData.scans,
        events: eventData.events,
      };
      setUser(newUserData);
    }
    GetUserData();
  }, [refreshLogin]);

  return {
    user,
    isLoggedIn,
    setIsLoggedIn,
    isAdmin,
    setIsAdmin,
    adminView,
    setAdminView,
    failedLoginAttempt,
    setFailedLoginAttempt,
  };
}
