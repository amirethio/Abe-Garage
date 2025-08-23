const orderService  =  require('./../services/order.service')


async function addOrder(req, res, next) {
  try {
    const response = await orderService.addOrder(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(501).json({
      sucess: false,
      message: "something went wrong",
    });
  }
}

module.exports = {
  addOrder,
};














