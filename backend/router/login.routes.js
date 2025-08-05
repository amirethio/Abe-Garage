const express =  require('express')
const router = express.Router()
const loginController = require('./../controller/login.controller')






router.post("/api/employee/login", loginController);


module.exports =  loginController