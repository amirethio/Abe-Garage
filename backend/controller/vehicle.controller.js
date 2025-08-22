const VehicleService = require("./../services/vehicle.service");

async function addVehicle(req, res, next) {
  try {
    const response = await VehicleService.addVehicle(req.body);
    res.status(response.sucess == true ? 200 : 501).json(response);
  } catch (error) {
    res.status(501).json({
      sucess: false,
      message: "something went wrong",
    });
  }
}

module.exports = {
  addVehicle,
};
