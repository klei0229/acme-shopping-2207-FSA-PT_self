const conn = require('./conn');
const User = require('./User');
// const Product = require('./Product');
const Bundle = require('./Bundle');
const Order = require('./Order');
const LineItem = require('./LineItem');
const fs = require('fs');
const path = require('path');

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Bundle);

const getImage = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'base64', (err, data) => {
      if (err) {
       reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const avatar = await getImage(path.join(__dirname, '../../prof-avatar.png'));
  const [moe, lucy, larry, ethyl, korean, italian, kitkat] = await Promise.all([
    User.create({ username: 'moe', password: '123', avatar }),
    User.create({ username: 'lucy', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    User.create({ username: 'ethyl', password: '123' }),
    Bundle.create({ name: 'Korean Package' }),
    Bundle.create({ name: 'Italian Package' }),
    Bundle.create({ name: 'Kitkat Package' }),
  ]);

  const cart = await ethyl.getCart();
  await ethyl.addToCart({ bundle: korean, quantity: 3 });
  await ethyl.addToCart({ bundle: kitkat, quantity: 2 });
  return {
    users: {
      moe,
      lucy,
      larry,
    },
    bundle: {
      korean,
      italian,
      kitkat,
    },
  };
};

module.exports = {
  syncAndSeed,
  User,
  Bundle,
};
