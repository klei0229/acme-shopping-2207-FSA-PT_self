const conn = require('./conn');
const { STRING, UUID, UUIDV4, BOOLEAN } = conn.Sequelize;

const Address = conn.define('address', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4,
	},
	street: {
		type: STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	apartment: {
		type: STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	city: {
		type: STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	state: {
		type: STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	zipcode: {
		type: STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	isShipping: {
		type: BOOLEAN,
		defaultValue: true,
		allowNull: false,
	},
	isBilling: {
		type: BOOLEAN,
		defaultValue: true,
		allowNull: false,
	},
});

module.exports = Address;
