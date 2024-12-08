const User = require('../models/userModel') 

// Get all user
const getUser = async(req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users);                //change products to user if it breaks
        } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
        }
}
// Get a user by ID
const getUserID =async(req, res) => {    
    try {
        const {id} = req.params;
        const user = await User.findById(id)
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(500).json({message: 'User not found'})
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}
//Save new user
const saveUser = async(req, res) => {
  try {
    const user = await User.create(req.body)  
    res.status(200).json(user)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }	
    }
// update a user
const updateUser =async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        // we cannot find any user in database
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// delete a user
const deleteUser =  async(req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getUser,getUserID,saveUser,updateUser,deleteUser
}