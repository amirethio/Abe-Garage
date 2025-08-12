var jwt = require("jsonwebtoken");

// check its
const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1]; // Get part after "Bearer"
  const SECRET_KEY = process.env.JWT_SECRET_KEY;

  const decode = jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ sucess: "false", message: "Invalid or expired token" });
    } else {
      req.user = decoded;
      next();
    }
  });
};

module.exports = auth;
