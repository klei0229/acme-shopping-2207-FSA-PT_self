const Sequelize = require('sequelize');
const config = {};

if (process.env.QUIET) {
	config.logging = false;
}
const conn = new Sequelize(
	process.env.DATABASE_URL || 'postgres://localhost/acme_shopping_db',
	config
);

module.exports = conn;

//Fernando's comment
// Ethan's comment

//beejay test try 2

// Ethan's comment

//Kevin's comment
