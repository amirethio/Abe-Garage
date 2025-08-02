const express =  require('express')
const router  = express.Router()


// importing routes
const install =  require('./install.routes')




// middleware
router.use(install)




module.exports =  router