const express = require('express');
const app = express.Router();
const { User, Address } = require('../db');

module.exports = app;

app.get('/', async (req, res, next) => {
	try {
		const user = await User.findByToken(req.headers.authorization);
		res.send(await Address.findAll({ where: { userId: user.id } }));
	} catch (ex) {
		next(ex);
	}
});
