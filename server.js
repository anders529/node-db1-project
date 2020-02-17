const express = require('express');
const accountRouter = require('./routes/accountRouter');
const server = express();
server.use(express.json());
server.use('/api/accounts', accountRouter);
module.exports = server;