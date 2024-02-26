import { useEffect, useState } from "react";
import { TUser } from "../Types/db";
import AttemptLogIn from "../Server/AttemptLogIn";
import GetEventHistory from "../Server/GetEventHistory";

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

  const localNetId = "johndoe24";

  useEffect(() => {
    AttemptLogIn(localNetId).then((loginRes) => {
      if (loginRes.status === 200) {
        setIsLoggedIn(true);
        if (loginRes.data.user[0].isAdmin === 1) {
          setIsAdmin(true);
          setAdminView(true);
        }
        GetEventHistory(localNetId).then((eventRes) => {
          if (eventRes.status === 200) {
            const newUserData = {
              ...loginRes.data.user[0],
              scans: eventRes.data.scans,
              events: eventRes.data.events,
            };
            setUser(newUserData);
          }
        });
      }
    });
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
