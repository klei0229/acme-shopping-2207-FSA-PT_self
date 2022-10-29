<<<<<<< HEAD
const Sequelize = require("sequelize");
const config = {};

if (process.env.QUIET) {
  config.logging = false;
}
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_shopping_db",
  config
=======
const Sequelize = require('sequelize');
const config = {};

if (process.env.QUIET) {
	config.logging = false;
}
const conn = new Sequelize(
	process.env.DATABASE_URL || 'postgres://localhost/acme_shopping_db',
	config
>>>>>>> 9f7321885faf8bd46f16f5f6a668f7ebb284403c
);

module.exports = conn;

<<<<<<< HEAD
//ci test
=======
// Ethan's comment
>>>>>>> 9f7321885faf8bd46f16f5f6a668f7ebb284403c
