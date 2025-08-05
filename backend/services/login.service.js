const db = require("./../config/db.config");
const bcrypt = require("bcryptjs");
const employeeService = require("./employee.service");

async function login(user_data) {
  try {
    let returnService = {};
    const checkEmployee = await employeeService.getEmployeeByEmail(
      user_data.employee_email
    );
    if (checkEmployee.length == 0) {
      returnService = {
        status: "fail",
        message: "Employee does not Exist",
      };
      return returnService;
    }
    const passCheck = await bcrypt.compare(
      user_data.employee_password,
      checkEmployee[0].employee_password_hashed
    );
    if (!passCheck) {
      returnService = {
        status: "fail",
        message: "wrong password",
      };
      return returnService;
    } else {
      returnService = {
        status: "sucess",
        data: checkEmployee[0],
      };
      return returnService;
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { login };
