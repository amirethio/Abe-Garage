const express = require("express");
require("dotenv").config();
const cors = require('cors')
const allRoutes = require("./router/index.route");

// Declaring:
const app = express();
const PORT = process.env.PORT;
var corsOptions = {
  origin: process.env.FRONTEND,
  optionsSuccessStatus: 200,
};





// MIDDLEWARES
app.use(cors(corsOptions));
app.use(express.json());
app.use(allRoutes);






// APP : LISTENING 
app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});

module.exports = app;
