import { useState } from "react";

export default function useLogin(isLoggedInParam = false, isAdminParam = false) {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInParam);
  const [isAdmin, setIsAdmin] = useState(isAdminParam);

  return {
    isLoggedIn,
    setIsAdmin,
    isAdmin,
    setIsLoggedIn,
  };
}
