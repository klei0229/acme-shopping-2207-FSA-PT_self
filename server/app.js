const express = require('express');
const app = express();
const { User } = require('./db');
app.use(express.json());

module.exports = app;

app.use('/api/auth', require('./api/auth'));
