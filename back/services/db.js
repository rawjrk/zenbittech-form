if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // eslint-disable-line global-require
}

const mysql = require("mysql2");

const dbCredentials = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
};

const conn = mysql.createConnection(dbCredentials);

conn.connect();

module.exports = conn;
