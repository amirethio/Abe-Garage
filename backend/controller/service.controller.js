const serviceServices = require("./../services/service.service");

async function addServices(req, res, next) {
  try {
    const response = await serviceServices.addServices(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(501).json({
      sucess: false,
      message: "something went wrong",
    });
  }
}

async function fetchServices(req, res, next) {
  try {
    const response = await serviceServices.fetchServices();
    res.status(200).json(response);
  } catch (error) {
    res.status(501).json({
      sucess: false,
      message: "something went wrong",
    });
  }
}

async function deleteService(req, res, next) {
try {
    const id = req.params.id;
   const response = await serviceServices.deleteService(id);
   res.status(200).json(response);
} catch (error) {
  res.status(501).json({
    sucess: false,
    message: "something went wrong",
  });
}

}

module.exports = {
  addServices,
  fetchServices,
  deleteService,
};
