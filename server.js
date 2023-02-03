const http = require('http');
const { getProducts } = require('./controllers/productController')


const server = http.createServer((req, res) => {
  if(req.url === '/api/products' && req.method === 'GET') {
    getProducts()
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({ message: 'Route Not Found'}));
  }

});

const PORT = process.env.PORT | 8600;

server.listen(PORT, () => console.log(`Server ON: ${PORT}`));