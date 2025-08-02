const mysql = require("mysql2/promise");
require('dotenv').config('./../.env')
const connectionParams = {
  host: process.env.HOST,
  user: process.env.DBUSER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 10,
};

const pool = mysql.createPool(connectionParams);

async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);
  return rows;
}


module.exports = { query };
