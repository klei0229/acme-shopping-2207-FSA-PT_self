const express = require('express');
const app = express.Router();
const { Bundle, Product } = require('../db');
module.exports = app;

app.get('/', async (req, res, next) => {
	try {
		res.send(
			await Bundle.findAll({
				include: {
					model: Product,
				},
			})
		);
	} catch (ex) {
		next(ex);
	}
});
