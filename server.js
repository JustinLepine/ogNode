const http = require('http');
const products = require('./data/products')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json'});
  res.end(JSON.stringify(products));
});

const PORT = process.env.PORT | 8600;

server.listen(PORT, () => console.log(`Server ON: ${PORT}`));