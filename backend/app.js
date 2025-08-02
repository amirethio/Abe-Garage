const express = require('express')
require("dotenv").config();
const allRoutes =  require('./router/index.route')
const app = express()
const PORT =  process.env.PORT



app.use(allRoutes)

app.listen(PORT ,()=>{
    console.log(`app is running on http://localhost:${PORT}`)
} )

module.exports = app