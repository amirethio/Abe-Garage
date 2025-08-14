const loginService = require("./../services/login.service");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

async function loginController(req, res, next) {
  console.log("backend");
  try {
    const EmployeeExists = await loginService.login(req.body);
    if (EmployeeExists.status == "fail") {
      res.status(400).json({
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
    var token = jwt.sign(payload, SECRET_KEY, {
      expiresIn: "12h",
    });
    EmployeeExists.token = token;
    res.status(200).json({
      status: "sucess",
      data: {
        employee_token: token,
      },
    });
  } catch (error) {
    // 
  }
}

module.exports = loginController;
