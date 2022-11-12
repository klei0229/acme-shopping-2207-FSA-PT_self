const express = require('express');
const app = express();
const path = require('path');

app.use(express.json({ limit: '50mb' }));

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));

app.get('/', (req, res) =>
	res.sendFile(path.join(__dirname, '../static/index.html'))
);

app.use('/api/auth', require('./api/auth'));
app.use('/api/orders', require('./api/orders'));
app.use('/api/users', require('./api/users'));
app.use('/api/bundles', require('./api/bundles'));
app.use('/api/products', require('./api/products'));
app.use('/api/addresses', require('./api/addresses'));
app.use('/api/stripe', require('./api/stripe'));

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send(err);
});

module.exports = app;
