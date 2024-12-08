const Product = require('../models/productModel') 

// Get all products
const getProducts = async(req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products);
        } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
        }
}
// Get a product by ID
const getProductID =async(req, res) => {    
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        if(product) {
            res.status(200).json(product)
        } else {
            res.status(500).json({message: 'Product not found'})
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}
//Save new product
const saveProduct = async(req, res) => {
  try {
    const product = await Product.create(req.body)  
    res.status(200).json(product)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }	
    }
// update a product
const updateProduct =async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// delete a product
const deleteProduct =  async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProducts,getProductID,saveProduct,updateProduct,deleteProduct
}