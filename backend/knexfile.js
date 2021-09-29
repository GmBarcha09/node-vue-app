const dotenv = require("dotenv");

// import dotenv from "dotenv"

dotenv.config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT
    },
    migrations: {
      tableName: "migrations",
    },

    pool: {
      max: 50,
      min: 2,
      afterCreate: function (connection, callback) {
        connection.query("SET TIME ZONE 'UTC'", function (err) {
          callback(err, connection);
        });
      },
    },
  },
};