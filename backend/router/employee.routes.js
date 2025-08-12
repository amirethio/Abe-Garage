const express = require("express");
const router = express.Router();
const employeeController = require('./../controller/employee.controller')
const authMiddleware  =  require('./../middlewares/auth.middleware')
const authorizeRoles =  require('../middlewares/role.middleware')

// ROUTES: 

router.post(
  "/api/employee",
  authMiddleware,
  authorizeRoles(3),
  employeeController.createEmployee
)






module.exports = router ; 