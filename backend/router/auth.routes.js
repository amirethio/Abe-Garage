const express =  require('express')
const router =  express.Router()
const refreshToken  = require('./../controller/auth.controller')




router.get('/refresh' , refreshToken)






module.exports =  router