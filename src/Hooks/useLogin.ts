import { useState } from "react";

export default function useLogin(isLoggedInParam = false, isAdminParam = true) {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInParam);
  const [isAdmin, setIsAdmin] = useState(isAdminParam);
  const [adminView, setAdminView] = useState(isAdminParam);

  return {
    isLoggedIn,
    setIsAdmin,
    isAdmin,
    setIsLoggedIn,
    adminView,
    setAdminView,
  };
}
