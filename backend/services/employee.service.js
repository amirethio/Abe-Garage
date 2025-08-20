const db = require("./../config/db.config");
const bcrypt = require("bcryptjs");

async function checkIfEmployeeExists(email_adress) {
  const sql = `SELECT 1 FROM employee WHERE employee_email	 = ?;`;
  const emailCheck = await db.query(sql, [email_adress]);
  if (emailCheck.length == 0) {
    return false;
  }
  return emailCheck;
}
async function createEmployee(user_data) {
  let createdEmployee = {};

  try {
    // hashing of the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user_data.employee_password, salt);

    // insert emial and employee status
    const sql = `INSERT INTO employee (employee_email, active_employee) VALUES (?, ?)`;
    const rows = await db.query(sql, [
      user_data.employee_email,
      user_data.active_employee,
    ]);
    if (rows.affectedRows !== 1) {
      return false;
    }
    const insertId = rows.insertId;
    const sql2 = `INSERT INTO employee_info (employee_id, employee_first_name,employee_last_name,employee_phone) VALUES (?, ?,?,?)`;
    const rows2 = await db.query(sql2, [
      insertId,
      user_data.employee_first_name,
      user_data.employee_last_name,
      user_data.employee_phone,
    ]);
    const sql3 = `INSERT INTO employee_pass (employee_id, employee_password_hashed) VALUES (?, ?)`;
    const rows3 = await db.query(sql3, [insertId, hashPassword]);
    const sql4 = `INSERT INTO employee_role  (employee_id , company_role_id) VALUES (?, ?)`;
    const rows4 = await db.query(sql4, [insertId, user_data.company_role_id]);
    createdEmployee = {
      employee_id: insertId,
    };
    return createEmployee;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// a function to get employee by emaail for login
async function getEmployeeByEmail(employee_email) {
  const query = `
    SELECT *
    FROM employee
    INNER JOIN employee_info ON employee.employee_id = employee_info.employee_id
    INNER JOIN employee_pass ON employee.employee_id = employee_pass.employee_id
    INNER JOIN employee_role ON employee.employee_id = employee_role.employee_id
    WHERE employee.employee_email = ?
  `;
  const rows = await db.query(query, [employee_email]);
  return rows;
}

async function getAllEmployees() {
  const query =
    "SELECT * FROM employee INNER JOIN employee_info ON employee.employee_id = employee_info.employee_id INNER JOIN employee_role ON employee.employee_id = employee_role.employee_id INNER JOIN company_roles ON employee_role.company_role_id = company_roles.company_role_id ORDER BY employee.employee_id DESC limit 10";
  const rows = await db.query(query);
  return rows;
}

async function updateEmployee(new_data) {
  try {
    const {
      employee_id,
      employee_first_name,
      employee_last_name,
      employee_phone,
      active_employee,
      company_role_id,
    } = new_data;
    const sql = ` update employee_info set employee_first_name = ? , employee_last_name = ?  , employee_phone = ? WHERE employee_id = ?`;
    const response = await db.query(sql, [
      employee_first_name,
      employee_last_name,
      employee_phone,
      employee_id,
    ]);
    const sql2 = ` update employee set active_employee = ?  WHERE employee_id = ?`;
    const response2 = await db.query(sql2, [active_employee, employee_id]);
    return {
      sucess: true,
      message: "sucessfully update the employee",
    };
  } catch (error) {
    return {
      sucess: false,
      message: "something went wrong",
    };
  }
}

async function getSingleEmployee(employee_id) {
  const query =
    "SELECT * FROM employee INNER JOIN employee_info ON employee.employee_id = employee_info.employee_id INNER JOIN employee_role ON employee.employee_id = employee_role.employee_id INNER JOIN company_roles ON employee_role.company_role_id = company_roles.company_role_id where employee.employee_id = ?";
  const rows = await db.query(query , [employee_id]);
  return rows;
}



module.exports = {
  checkIfEmployeeExists,
  createEmployee,
  getEmployeeByEmail,
  getAllEmployees,
  updateEmployee,
  getSingleEmployee,
};
