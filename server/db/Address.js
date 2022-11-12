const conn = require('./conn');
const { STRING, UUID, UUIDV4, BOOLEAN } = conn.Sequelize;

const Address = conn.define('address', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4,
	},
	label: {
		type: STRING,
		defaultValue: 'Home',
		unique: true,
		validate: {
			notEmpty: true,
		},
	},
	street1: {
		type: STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	street2: {
		type: STRING,
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
	country: {
		type: STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	isShipping: {
		type: BOOLEAN,
		allowNull: false,
		defaultValue: true,
		validate: {
			notEmpty: true,
		},
	},
});

module.exports = Address;
