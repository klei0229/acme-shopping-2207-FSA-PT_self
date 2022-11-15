const conn = require('./conn');
const { STRING, UUID, UUIDV4, DECIMAL } = conn.Sequelize;

const Bundle = conn.define('bundle', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: STRING,
    //allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  descriptionShort: {
    type: STRING,
    //allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: DECIMAL,
    //allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: STRING,
    //allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  type: {
    type: STRING,
    //allowNull: false,
    validate: {
      notEmpty: true,
    }
  }
});

module.exports = Bundle;
