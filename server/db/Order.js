const conn = require('./conn');
const { STRING, BOOLEAN, UUID, UUIDV4, DECIMAL } = conn.Sequelize;

const Order = conn.define('order', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  isCart: {
    type: BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
  userId: {
    type: UUID,
    allowNull: false,
  },
  addressId: {
    type: UUID,
    allowNull: false,
  },
  total: {
    type: DECIMAL,
    allowNull: false,
  },
  tax: {
    type: DECIMAL,
    allowNull: false,
  },
  discount: {
    type: DECIMAL,
    allowNull: false,
  },
});

module.exports = Order;
