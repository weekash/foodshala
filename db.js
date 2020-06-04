const mysql = require("mysql");
const dotenv = require("dotenv").config();
const db = mysql.createConnection({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = db;
