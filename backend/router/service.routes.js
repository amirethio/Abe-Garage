const express = require("express");
const authorizeRoles = require("../middlewares/role.middleware");
const authMiddleware = require("./../middlewares/auth.middleware");
const router = express.Router();
const serviceController = require("./../controller/service.controller");

router.post(
  "/api/service",
  authMiddleware,
  authorizeRoles(1, 2, 3),
  serviceController.addServices
);
router.get(
  "/api/services",
  authMiddleware,
  authorizeRoles(1, 2, 3),
  serviceController.fetchServices
);

module.exports = router;
