const express = require("express");
const router = express.Router();
const employeeController = require('./../controller/employee.controller')



// ROUTES: 

router.post("/api/employee", employeeController.createEmployee);





module.exports = router ; 