//EXPRESS
const express = require('express')
const server = express()

//HOST
const { port, start } = require('./modules/server')
server.listen(port, start())

//CORS
const cors = require('cors')
server.use(cors())
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//DOTENV
require('dotenv').config

//ROUTES
server.use(require('./routes/api.routes'))