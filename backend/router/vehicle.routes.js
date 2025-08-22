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

router.get(
  "/api/vehicle/:id",
  authMiddleware,
  authorizeRoles(1, 3, 2),
  VehicleController.getVehicles
);
module.exports = router;
