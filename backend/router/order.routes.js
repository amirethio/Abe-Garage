const express = require("express");
const authorizeRoles = require("../middlewares/role.middleware");
const authMiddleware = require("./../middlewares/auth.middleware");
const router = express.Router();
const orderController = require("./../controller/order.controller");

router.post(
  "/api/order",
  authMiddleware,
  authorizeRoles(1, 2, 3),
  orderController.addOrder
);



// router.get(
//   "/api/services",
//   authMiddleware,
//   authorizeRoles(1, 2, 3),
//   serviceController.fetchServices
// );

module.exports = router;
