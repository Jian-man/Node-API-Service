const express = require('express');
const Client = require('../models/clientModel') 
const { getClients,getClientID,saveClient,updateClient,deleteClient} = require('../controllers/clientController') 
  
const clientRoute = express.Router() // create a new router;

// Get all client
clientRoute.get('/',getClients ) 

// Get a client by ID
clientRoute.get('/:id',getClientID)
//Save new client
clientRoute.post('/',saveClient)

 // update a client
clientRoute.put('/:id',updateClient )

// delete a client

clientRoute.delete('/:id',deleteClient)

module.exports = clientRoute;