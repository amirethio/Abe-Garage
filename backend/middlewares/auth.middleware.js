var jwt = require("jsonwebtoken");

// check its
const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1]; // Get part after "Bearer"
  const SECRET_KEY = process.env.JWT_SECRET_KEY;

  const decode = jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log('we got error' , err);
      
      return res
        .status(403)
        .json({ success: "false", error: "Invalid or expired token" });
    } else {
      req.user = decoded;
      next();
    }
  });
};

module.exports = auth;
