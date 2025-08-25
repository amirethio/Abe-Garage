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

async function getVehicles(req, res, next) {
  try {
    const response = await VehicleService.getVehicles(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(501).json({
      sucess: false,
      message: "someting went wrong",
    });
  }
}

async function deleteVehicle(req, res, next) {
  try {
    const id = req.params.id;
    const response = await VehicleService.deleteVehicle(id);
    if (!response) {
      res.status(400).json({
        error: "Failed to delete employee!",
      });
    } else {
      res.status(200).json({
        status: "success",
      });
    }
  } catch (error) {}
}

module.exports = {
  addVehicle,
  getVehicles,
  deleteVehicle,
};
