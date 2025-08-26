const express = require("express");
const authorizeRoles = require("../middlewares/role.middleware");
const authMiddleware = require("./../middlewares/auth.middleware");
const router = express.Router();
const orderController = require("./../controller/order.controller");

router.post(
  "/api/order",
  authMiddleware,
  authorizeRoles( 1,2, 3),
  orderController.addOrder
);

router.get(
  "/api/orders",
  authMiddleware,
  authorizeRoles(1, 2, 3),
  orderController.fetchOredrs
);

router.get(
  "/api/order/:id",
  authMiddleware,
  authorizeRoles(2, 3),
  orderController.getOrder
);

router.put(
  "/api/order",
  authMiddleware,
  authorizeRoles(1, 2, 3),
  orderController.updateOrder
);
router.delete(
  "/api/order/:id",
  authMiddleware,
  authorizeRoles(3),
  orderController.deleteOrder
);
module.exports = router;
