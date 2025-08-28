import { AuthContext } from "../context/AuthContext";
import React, { useContext } from "react";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    return null
  }
  return context;
};

export default useAuth;
