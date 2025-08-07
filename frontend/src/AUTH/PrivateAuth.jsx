import React, { useEffect, useState } from "react";
import useAuth from "./../hook/useAuth";
import { Navigate } from "react-router-dom";

const PrivateAuth = ({ role, children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const loginEmployee = useAuth();
  const user = loginEmployee?.userData;

  const isUserLoading = user === null || user === undefined;

  useEffect(() => {
    if (isUserLoading) {
      return; 
    }

    if (user && user.employee_id) {
      setIsLoggedIn(true);

      if (role && role.length > 0) {
        setIsAuthorized(role.includes(user.employee_role));
      } else {
        setIsAuthorized(true);
      }
    } else {
      setIsLoggedIn(false);
      setIsAuthorized(false);
    }

    setIsChecked(true);
  }, [user, isUserLoading, role]);

  if (!isChecked || isUserLoading) {
    return <div>Loading...</div>; 
  }

  if (!isLoggedin) {
    return <Navigate to="/login" />;
  }

  if (!isAuthorized) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};

export default PrivateAuth;
