const Sequelize = require("sequelize");
const config = {
  dialect: "postgres",
  dialectOptions: {
    ssl: true,
	rejectUnauthorized: false	
  },
};

if (process.env.QUIET) {
  config.logging = false;
}
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_shopping_db",
  config
);

module.exports = conn;
