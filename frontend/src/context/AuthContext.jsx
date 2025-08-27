import logedindata from "../utils/auth";
import { createContext, useState, useEffect } from "react";
import { setAccessToken as setAxiosToken } from "../API/axiosInstance";

export const AuthContext = createContext();

export let setUserDataExternal = null;

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userState, setuserState] = useState();
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const decode = logedindata();
    
    if (decode) {
      setUserData(decode);
      setAxiosToken(decode.token)
    } else {
      setUserData(false);
    }
  }, [userState]);
    setUserDataExternal = setUserData;

  const data = {
    setUserData,
    userData,
    userState,
    setuserState,
    accessToken,
    setAccessToken,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
