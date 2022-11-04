const conn = require('./conn');
const User = require('./User');
// const Product = require('./Product');
const Bundle = require('./Bundle');
const Order = require('./Order');
const LineItem = require('./LineItem');

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Bundle);

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const [moe, lucy, larry, foo, bar, bazz, ethyl] = await Promise.all([
    User.create({ username: 'moe', password: '123' }),
    User.create({ username: 'lucy', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    Bundle.create({ name: 'foo' }),
    Bundle.create({ name: 'bar' }),
    Bundle.create({ name: 'bazz' }),
    User.create({ username: 'ethyl', password: '123' }),
  ]);

  const cart = await ethyl.getCart();
  await ethyl.addToCart({ bundle: bazz, quantity: 3 });
  await ethyl.addToCart({ bundle: foo, quantity: 2 });
  return {
    users: {
      moe,
      lucy,
      larry,
    },
    bundle: {
      foo,
      bar,
      bazz,
    },
  };
};

module.exports = {
  syncAndSeed,
  User,
  Bundle,
};
