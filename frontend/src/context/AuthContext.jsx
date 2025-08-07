import logedindata from "../utils/auth";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null);
  const [userState, setuserState] = useState();
   
  useEffect(() => {
    const decode = logedindata();
    if (decode) {
      setUserData(decode);
    }else{
      setUserData(false);
    }
  }, [userState]);
  const data = {userData, userState, setuserState};
  return (
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  );
};
