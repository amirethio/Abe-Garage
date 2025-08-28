const express = require("express");
require("dotenv").config();
const cors = require('cors')
const allRoutes = require("./router/index.route");
const cookieParser = require("cookie-parser");

// Declaring:
const app = express();
const PORT = process.env.PORT;
var corsOptions = {
  origin: process.env.FRONTEND,
  origin: "http://10.205.30.174:5173",
  optionsSuccessStatus: 200,
  credentials: true,
};





// MIDDLEWARES
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(allRoutes);



app.get('/test' , (req,res)=>{res.send("okay")})


// APP : LISTENING 
app.listen(PORT, () => {
  console.log(`app is running`);
});

module.exports = app;
