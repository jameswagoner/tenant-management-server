const http = require('http');
const server = http.createServer();

server.listen(process.env.PORT || 8008);