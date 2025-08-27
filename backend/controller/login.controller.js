
const loginService = require("./../services/login.service");
const jwt = require("jsonwebtoken");

const ACCESS_SECRET_KEY = process.env.JWT_ACCESS_SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET_KEY;
async function loginController(req, res, next) {
  try {
    const EmployeeExists = await loginService.login(req.body);
    if (EmployeeExists.status == "fail") {
      return res.status(401).json({
        status: EmployeeExists.status,
        message: EmployeeExists.message,
      });
    }

    const payload = {
      employee_id: EmployeeExists.data.employee_id,
      employee_role: EmployeeExists.data.company_role_id,
      employee_first_name: EmployeeExists.data.employee_first_name,
      employee_email: EmployeeExists.data.employee_email,
    };
    const AccessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: "30m",
    });
    const RefreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
      expiresIn: "7d",
    });
    EmployeeExists.token = AccessToken;

res.cookie("refreshToken", RefreshToken, {
  httpOnly: true,
  sameSite: "none", 
  secure: true, 
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

    res.status(200).json({
      status: "sucess",
      data: {
        employee_token: AccessToken,
      },
    });
  } catch (error) {
    //
  }
}

module.exports = loginController;
