const mongoose = require('mongoose')
const clientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your full name"],
        },
        contact: {
            type: String,
            required: [true, "Please enter your contact number"],
        },
        address: {
            type: String,
            required: [true, "Please enter your address"],
        }    
    },
        {
            timestamps: true,
    
        }
)

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;