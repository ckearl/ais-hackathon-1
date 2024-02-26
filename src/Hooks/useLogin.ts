import { useState } from "react";
import { User } from "../Context/UserContext";

export default function useLogin(isLoggedInParam = false, isAdminParam = true) {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInParam);
  const [isAdmin, setIsAdmin] = useState(isAdminParam);
  const [adminView, setAdminView] = useState(isAdminParam);

  const user: User = {
    name: "John Doe",
    netId: "jdoe",
    id: "1234",
  };

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
