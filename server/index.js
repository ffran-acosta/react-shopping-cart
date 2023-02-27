//EXPRESS
const express = require('express')
const server = express()

//HOST
const { port, start } = require('./modules/server')
server.listen(port, start())