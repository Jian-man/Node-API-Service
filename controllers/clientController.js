const Client = require('../models/clientModel') 

// Get all clients
const getClients = async(req, res) => {
    try {
        const clients = await Client.find({})
        res.status(200).json(clients);
        } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
        }
}
// Get a client by ID
const getClientID =async(req, res) => {    
    try {
        const {id} = req.params;
        const client = await Client.findById(id)
        if(client) {
            res.status(200).json(client)
        } else {
            res.status(500).json({message: 'Client not found'})
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}
//Save new client
const saveClient = async(req, res) => {
  try {
    const client = await Client.create(req.body)  
    res.status(200).json(client)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }	
    }
// update a client
const updateClient =async(req, res) => {
    try {
        const {id} = req.params;
        const client = await Client.findByIdAndUpdate(id, req.body);
        // we cannot find any client in database
        if(!client){
            return res.status(404).json({message: `cannot find any client with ID ${id}`})
        }
        const updatedClient = await Client.findById(id);
        res.status(200).json(updatedClient);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// delete a client
const deleteClient =  async(req, res) =>{
    try {
        const {id} = req.params;
        const client = await Client.findByIdAndDelete(id);
        if(!client){
            return res.status(404).json({message: `cannot find any client with ID ${id}`})
        }
        res.status(200).json(client);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getClients,getClientID,saveClient,updateClient,deleteClient
}