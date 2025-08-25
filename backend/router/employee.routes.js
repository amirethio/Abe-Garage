const express = require("express");
const router = express.Router();
const employeeController = require('./../controller/employee.controller')
const authMiddleware  =  require('./../middlewares/auth.middleware')
const authorizeRoles =  require('../middlewares/role.middleware')

// ROUTES: 

router.post(
  "/api/employee",
  authMiddleware,
  authorizeRoles(1,3 ,2),
  employeeController.createEmployee
)

router.get(
  "/api/employees",
  authMiddleware,
  authorizeRoles(1, 3, 2),
  employeeController.getAllEmployees
);
router.put(
  "/api/employees",
  authMiddleware,
  authorizeRoles(1, 3, 2),
  employeeController.updateEmployee
);

router.get(
  "/api/employee/:id",
  authMiddleware,
  authorizeRoles(1, 3, 2),
  employeeController.getSingleEmployee
);

router.delete(
  "/api/employee/:id",
  authMiddleware,
  authorizeRoles(1, 3, 2),
  employeeController.deleteEmployee
);

module.exports = router ; 