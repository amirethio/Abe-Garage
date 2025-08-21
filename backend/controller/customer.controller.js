const customerService = require("./../services/customer.service");


async function AddCustomer(req,res , next) {

try {
    const response = await customerService.AddCustomer(req.body);
     res.status(200).json(response);
} catch (error) {
    return {
      sucess: false,
      message: "problem happen while adding the new customer",
    }; 
}    
}

async function listCustomer(req, res, next) {
try {
   const response = await customerService.fetchCustomer();
   res.status(200).json(response)
} catch (error) {
  res.status(501).json({
    sucess: false,
    message: "something went wrong",
  });
}
}

async function getSingleCustomer(req, res, next) {
  const id = req.params.id;
  const response = await customerService.getSingleCustomer(id);
  if (!response) {
    res.status(400).json({
      error: "Failed to get all employees!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: response,
    });
  }
}
async function updateCustomer(req, res, next) {
  try {
    const response = await customerService.updateCustomer(req.body);
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
  AddCustomer,
  listCustomer,
  getSingleCustomer,
  updateCustomer,
};