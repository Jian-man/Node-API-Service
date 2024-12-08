const express = require('express');
const Product = require('../models/productModel') 
const { getProducts,getProductID,saveProduct,updateProduct,deleteProduct} = require('../controllers/productController') 
  

const productRoute = express.Router() // create a new router;


// Get all products
productRoute.get('/',getProducts ) 

// Get a product by ID
productRoute.get('/:id',getProductID)
//Save new product
productRoute.post('/',saveProduct)

 // update a product
productRoute.put('/:id',updateProduct )

// delete a product

productRoute.delete('/:id',deleteProduct)

module.exports = productRoute;