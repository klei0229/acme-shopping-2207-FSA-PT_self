const express = require('express');
const app = express.Router();
const { Address } = require('../db');

module.exports = app;

app.put('/:id', async (req, res, next) => {
	try {
		const address = await Address.findByPk(req.params.id);
		await address.update(req.body);
		res.send(address);
	} catch (ex) {
		next(ex);
	}
});
