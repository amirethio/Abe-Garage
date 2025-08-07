import { AuthContext } from "../context/AuthContext";
import React, { useContext } from "react";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.log("signin fist");
    return null
  }
  return context;
};

export default useAuth;
