const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"],
        },
        quantity: {
            type: Number,
            required: [true, "Please enter the quantity"],
        },
        price: {
            type: Number,
            required: [true, "Please enter the price"],
        },
        image: {
            type: String,
            required: false,
        }    
    },
        {
            timestamps: true,
    
        }
)

const Product = mongoose.model('Product', productSchema);
module.exports = Product;