const conn = require("./../config/db.config");
require('dotenv').config()
const fs = require("fs");
const path = require("path");

async function install() {
  const sqlPath = path.join(__dirname, "sql", "initial-queries.sql");
  const lines = fs.readFileSync(sqlPath, "utf-8").split("\n");
  let queries = [];
  let finalMessage = {};
  let templine = "";

  lines.forEach((line) => {
    if (line.trim().startsWith("--") || line.trim() === "") {
      return;
    }
    templine += line;
    if (line.trim().endsWith(";")) {
      const sqlQuery = templine.trim();
      queries.push(sqlQuery);
      templine = "";
    }
  });

  for (let i = 0; i < queries.length; i++) {
    try {
      await conn.query(queries[i]);
    } catch (error) {
      finalMessage.message = "Not all table created";
    }
  }

  if (!finalMessage.message) {
    finalMessage.message = "All Tables CReated";
    finalMessage.status = 200;
  } else {
    finalMessage.status = 500;
  }
  return finalMessage;
}

module.exports = { install };
