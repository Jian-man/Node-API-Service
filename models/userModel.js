const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your full name"],
        },
        info: {
            type: String,
            required: [true, "Please enter something about yourself"],
        },
        jobs: {
            type: String,
            required: [true, "Please enter what you are able to do"],
        },
        image: {
            type: String,
            required: [true, "Please upload an image or two for your profile"],
        }    
    },
        {
            timestamps: true,
    
        }
)

const User = mongoose.model('User', userSchema);
module.exports = User;