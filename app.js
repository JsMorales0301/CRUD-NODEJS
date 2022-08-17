const Server = require('./src/model/server');
require('dotenv').config();

const server = new Server();

server.listen();