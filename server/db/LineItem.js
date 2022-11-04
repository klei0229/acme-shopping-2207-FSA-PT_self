const conn = require('./conn');
const { INTEGER, UUID, UUIDV4, ENUM } = conn.Sequelize;

const LineItem = conn.define('lineItem', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4,
	},
	quantity: {
		type: INTEGER,
		defaultValue: 1,
		allowNull: false,
	},
	size: {
		type: ENUM('Small', 'Large'),
		defaultValue: 'Small',
		allowNull: false,
	},
	frequency: {
		type: ENUM('Monthly', 'Annually'),
		defaultValue: 'Monthly',
		allowNull: false,
	},
	bundleId: {
		type: UUID,
		allowNull: false,
	},
	orderId: {
		type: UUID,
		allowNull: false,
	},
});

module.exports = LineItem;
