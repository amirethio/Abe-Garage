import { jwtDecode } from "jwt-decode";

const extractToken = () => {
    
  try {
    console.log("decoding");
    
    const token = localStorage.getItem("authToken");
    if (token) {
      const decoded = jwtDecode(token);
      const firstFour = Object.fromEntries(Object.entries(decoded).slice(0, 4));
      firstFour.token = token
      return firstFour;
    } else {
      return ;
    }
  } catch (err) {
    return ;
  }
};

export default extractToken;
