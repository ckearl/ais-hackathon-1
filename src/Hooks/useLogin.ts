import { useEffect, useState } from "react";
import { TUser } from "../Types/db";
import AttemptLogIn from "../Server/AttemptLogIn";
import GetEventHistory from "../Server/GetEventHistory";
import { Save, Load } from "../SecureStore";

export default function useLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminView, setAdminView] = useState(false);
  const [user, setUser] = useState<TUser>({
    netId: "",
    firstName: "",
    lastName: "",
    dateCreated: 0,
    isAdmin: 0,
    scans: [],
    events: [],
  });

  Save("netId", "johndoe24");

  useEffect(() => {
    async function GetUserData() {
      const netId = await Load("netId");

      if (!netId) return;

      const loginRes = await AttemptLogIn(netId);

      if (loginRes.data.status !== "success") return;

      setIsLoggedIn(true);

      if (loginRes.data.user[0].isAdmin === 1) {
        setIsAdmin(true);
        setAdminView(true);
      }

      const eventRes = await GetEventHistory(netId);

      if (eventRes.data.status !== "success") return;

      const newUserData = {
        ...loginRes.data.user[0],
        scans: eventRes.data.scans,
        events: eventRes.data.events,
      };
      setUser(newUserData);
    }
    GetUserData();
  }, []);

  return {
    user,
    isLoggedIn,
    setIsLoggedIn,
    isAdmin,
    setIsAdmin,
    adminView,
    setAdminView,
  };
}
