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

app.post('/', async (req, res, next) => {
	try {
		res.status(201).send(await Address.create(req.body));
	} catch (ex) {
		next(ex);
	}
});
