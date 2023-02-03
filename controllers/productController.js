const Product = require('../models/productModel');

// Gets all Products
// Route: GET /api/products
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
// Route: GET /api/product/:id
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

// Create a Product
// Route: POST /api/products
async function createProduct(req, res) {
  try {
    const product = {
      title: 'Test Product',
      description: 'This is a new product',
      price: 100
    }

    const newProduct = Product.create(product);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newProduct));
  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct
}