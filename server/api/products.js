const express = require('express');
const app = express.Router();
const { Product } = require('../db');
const conn = require('../db')
module.exports = app;

app.get('/', async (req, res, next) => {
	try {
		res.send(await Product.findAll());
	} catch (ex) {
		next(ex);
	}
});