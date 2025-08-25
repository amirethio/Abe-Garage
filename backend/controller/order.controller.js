const orderService = require("./../services/order.service");

async function addOrder(req, res, next) {
  try {
    const response = await orderService.addOrder(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(501).json({
      sucess: false,
      message: "something went wrong",
    });
  }
}

async function fetchOredrs(req, res, next) {
  try {
    const response = await orderService.fetchOredrs();
    res.status(200).json(response);
  } catch (error) {
    res.status(501).json({
      sucess: false,
      message: "something went wrong",
    });
  }
}

async function getOrder(req, res, next) {
  try {
    const response = await orderService.getOrder(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(501).json({
      sucess: false,
      message: "something went wrong",
    });
  }
}

async function updateOrder(req, res, next) {
  try {
    const response = await orderService.updateOrder(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(501).json({
      sucess: false,
      message: "something went wrong",
    });
  }
}

async function deleteOrder(req, res, next) {
  try {
    const response = await orderService.deleteOrder(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(501).json({
      sucess: false,
      message: "something went wrong",
    });
  }
}

module.exports = {
  addOrder,
  fetchOredrs,
  getOrder,
  updateOrder,
  deleteOrder,
};
