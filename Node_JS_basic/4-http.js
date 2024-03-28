const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

server.listen(12345, () => {
  console.log('Server running at http://localhost:12345/');
});

module.exports = server;
