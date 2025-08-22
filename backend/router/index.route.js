const express = require("express");
const router = express.Router();

// importing routes
const install = require("./install.routes");
const AddEmployee = require("./employee.routes");
const login = require("./login.routes");
const customer = require("./customer.routes");
const Vehicle = require("./vehicle.routes");

// middleware
router.use(install);
router.use(AddEmployee);
router.use(login);
router.use(customer);
router.use(Vehicle);

module.exports = router;
