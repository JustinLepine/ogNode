const Product = require('../models/productModel');

// Gets all Products
// Route: /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } catch(error) {
    console.log(error);
  }
}

// Get a single Product
// Route: /api/product/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product Not Found'}));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(product));
    }
  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct
}