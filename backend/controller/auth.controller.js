const jwt = require("jsonwebtoken");
const JWT_REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET_KEY;
const ACCESS_SECRET_KEY = process.env.JWT_ACCESS_SECRET_KEY;

async function refreshToken(req, res, next) {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res.status(401).json({ message: "No refresh token" });

  jwt.verify(refreshToken, JWT_REFRESH_SECRET_KEY, (err, user) => {

    if (err) return res.status(403).json({ message: "Invalid refresh token" });
    const accessToken = jwt.sign(
      {
        employee_id: user.employee_id,
        employee_role: user.employee_role,
        employee_first_name: user.employee_first_name,
        employee_email: user.employee_email,
      },
      ACCESS_SECRET_KEY,
      { expiresIn: "10s" }
    );
    return res.json({ accessToken });
  });
}

module.exports = refreshToken;
