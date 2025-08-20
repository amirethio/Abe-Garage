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
module.exports = { AddCustomer, listCustomer };