var jwt = require("jsonwebtoken");

// check its
const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; 
  // console.log( "this is token" , token);
  
  const SECRET_KEY = process.env.JWT_ACCESS_SECRET_KEY;

  const decode = jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log(err);
      return res
        .status(401)
        .json({ success: "false", error: "Invalid or expired token" });
    } else {
      req.user = decoded;
      next();
    }
  });
};

module.exports = auth;
