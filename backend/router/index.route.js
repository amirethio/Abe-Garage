const express = require("express");
const router = express.Router();

// importing routes
const install = require("./install.routes");
const AddEmployee = require("./employee.routes");
const login = require("./login.routes");
const customer = require("./customer.routes");
const Vehicle = require("./vehicle.routes");
const service = require("./service.routes");
const Order = require('./order.routes')
const refresh = require("./auth.routes");
// middleware
router.use(install);
router.use(AddEmployee);
router.use(login);
router.use(customer);
router.use(Vehicle);
router.use(service);
router.use(Order);
router.use(refresh)


module.exports = router;
