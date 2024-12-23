const express = require('express');
const User = require('../models/userModel') 
const { getUser,getUserID,saveUser,updateUser,deleteUser} = require('../controllers/userController') 
  
const route = express.Router();

// Get all users
route.get('/', getUser);

// Get a user by ID
route.get('/:id', getUserID);

// Save new user
route.post('/', saveUser);

// Update a user
route.put('/:id', updateUser);

// Delete a user
route.delete('/:id', deleteUser);

route.delete('/:id',deleteUser)

module.exports = route;