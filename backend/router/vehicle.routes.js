const express = require("express");
const router = express.Router();
const VehicleController = require("./../controller/vehicle.controller");
const authMiddleware =  require('./../middlewares/auth.middleware')
const authorizeRoles  = require('./../middlewares/role.middleware')


router.post(
  "/api/vehicle",
  authMiddleware,
  authorizeRoles(1, 3, 2),
  VehicleController.addVehicle
);

module.exports = router;
