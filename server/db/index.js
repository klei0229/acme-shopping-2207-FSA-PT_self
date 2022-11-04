const conn = require('./conn');
const User = require('./User');
// const Product = require('./Product');
//test
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
	const [moe, lucy, larry, foo, bar, bazz, ethyl] = await Promise.all([
		User.create({
			username: 'moe',
			password: '123',
			firstName: 'moe',
			lastName: 'person',
			email: 'moe@gmail.com',
		}),
		User.create({
			username: 'lucy',
			password: '123',
			firstName: 'lucy',
			lastName: 'person',
			email: 'lucy@gmail.com',
		}),
		User.create({
			username: 'larry',
			password: '123',
			firstName: 'larry',
			lastName: 'person',
			email: 'larry@gmail.com',
		}),
		Bundle.create({
			name: 'foo',
			description: 'desc',
			imageUrl: 'image',
			price: 10,
		}),
		Bundle.create({
			name: 'bar',
			description: 'desc',
			imageUrl: 'image',
			price: 10,
		}),
		Bundle.create({
			name: 'bazz',
			description: 'desc',
			imageUrl: 'image',
			price: 10,
		}),
		User.create({
			username: 'ethyl',
			password: '123',
			firstName: 'ethyl',
			lastName: 'person',
			email: 'ethyl@gmail.com',
		}),
	]);

	const cart = await ethyl.getCart();
	await ethyl.addToCart({
		bundle: bazz,
		quantity: 3,
		size: 'Small',
		frequency: 'Monthly',
	});
	await ethyl.addToCart({
		bundle: foo,
		quantity: 2,
		size: 'Small',
		frequency: 'Monthly',
	});
	return {
		users: {
			moe,
			lucy,
			larry,
		},
		bundles: {
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
