const Product = require('../models/productModel');
const { getPostData } = require('../utils');

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
        const body = await getPostData(req)

        const { name, description, price } = JSON.parse(body)

        const product = {
            name,
            description,
            price
        }

        const newProduct = await Product.create(product)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newProduct))  

    } catch (error) {
        console.log(error)
    }
}

// Update a Product
// Route: PUT /api/products/:id
async function updateProduct(req, res, id) {
  try {
    const product = await Product.findById(id)

    if (!product) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product Not Found'}));
    } else {      
      const body = await getPostData(req)
      
      const { name, description, price } = JSON.parse(body)
      
      productData = {
        name: name || product.name,
        description: description || product.description,
        price: price || product.price
      }
      
      const updateProduct = await Product.update(id, productData)

      res.writeHead(200, { 'Content-Type': 'application/json' })
      return res.end(JSON.stringify(updateProduct))
    }
    
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct
}