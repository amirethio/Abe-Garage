const EmployeeService = require("./../services/employee.service");

async function createEmployee(req, res, next) {
  // CHECK: check if the account exitsts
  const EmployeeExists = await EmployeeService.checkIfEmployeeExists(
    req.body.employee_email
  );
  if (EmployeeExists) {
    res.status(400).json({
      error: "This email adress is already associated with other employee",
    });
  } else {
    try {
      const AddEmployee = await EmployeeService.createEmployee(req.body);
      if (!AddEmployee) {
        res.status(400).json({
          success: "false",
          error: "Failed to add employee",
        });
      } else if (AddEmployee) {
        res.status(200).json({
          success: "true",
        });
      } else {
        res.status(400).json({
          success: "true",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: "false",
        error: "someting went wrong",
      });
    }
  }
}

module.exports = { createEmployee };
