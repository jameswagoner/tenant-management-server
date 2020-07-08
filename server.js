const http = require('http')
const app = require('./app/app')

const server = http.createServer(app)

server.listen(process.env.SERVER_PORT || 8008)
