const express = require('express');
const accountRoutes = require('./routes/accountRoutes');
const server = express();
server.use(express.json());
server.use('/', accountRoutes);
module.exports = server;