const express = require("express");
const router = express.Router();
const customer = require("./../controller/customer.controller");
const authorizeRoles = require("../middlewares/role.middleware");
const authMiddleware = require("./../middlewares/auth.middleware");

router.post(
  "/api/customers",
  authMiddleware,
  authorizeRoles(3, 2),
  customer.AddCustomer
);


router.get(
  "/api/customers",
  authMiddleware,
  authorizeRoles(1,3, 2),
  customer.listCustomer
);



module.exports = router;
