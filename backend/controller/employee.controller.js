const EmployeeService = require("./../services/employee.service");

async function createEmployee(req, res, next) {
  // CHECK: check if the account exitsts
  const EmployeeExists = await EmployeeService.checkIfEmployeeExists(
    req.body.employee_email
  );
  if (EmployeeExists) {
    res.status(400).json({
      success: "false",
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
      res.status(400).json({
        success: "false",
        error: "someting went wrong",
      });
    }
  }
}

async function getAllEmployees(req, res, next) {
  const employees = await EmployeeService.getAllEmployees();
  if (!employees) {
    res.status(400).json({
      error: "Failed to get all employees!",
    });
  } else {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    res.status(200).json({
      status: "success",
      data: employees,
    });
  }
}
async function updateEmployee(req, res, next) {


try {
    const employees = await EmployeeService.updateEmployee(req.body);
res.status(200).json(employees)

} catch (error) {
  res.status(200).json({
    sucess: false,
    message: "something went wrong",
  });
}
}

async function getSingleEmployee(req, res, next) {
    const id = req.params.id;
  const employees = await EmployeeService.getSingleEmployee(id);
  if (!employees) {
    res.status(400).json({
      error: "Failed to get all employees!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: employees,
    });
  }
}

async function deleteEmployee(req, res, next) {
  try {
    const id = req.params.id;
    const employees = await EmployeeService.deleteEmployee(id);
    if (!employees) {
      res.status(400).json({
        error: "Failed to delete employee!",
      });
    } else {
      res.status(200).json({
        status: "success",
      });
    }
  } catch (error) {
    
  }
}

module.exports = {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  getSingleEmployee,
  deleteEmployee,
};
