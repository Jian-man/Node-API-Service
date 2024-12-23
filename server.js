require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')  
const userRoute = require('./routes/userRoute') 
const clientRoute = require('./routes/clientRoute')
const app = express()
const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND_URL = process.env.FRONTEND_URL
const errorMiddleware = require('./middleware/errorMiddleware') // Import the errorMiddleware.js file
const cors = require('cors')
var corsOptions = { 
    origin: FRONTEND_URL,
    optionsSuccessStatus: 200
}
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//  Routes

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use('/api/clients', clientRoute)

app.get('/', (req, res) => {
    
    res.send('Hello and welcome to the product API')
    })
app.get('/blog', (req, res) => {
    res.send('Hello blog')
    })

// Middleware
app.use(errorMiddleware); // Use the errorMiddleware.js file as middleware
// Connect to MongoDB
mongoose.connect("mongodb+srv://meyerjianb:YfGvEMdhQOGrMuON@cluster0.7d4iw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    app.listen(PORT, () => {
    console.log('Api is running on port ${PORT}')
    });
    console.log('Connected to MongoDB')
    }).catch((err) => { 
        console.log('Error connecting to MongoDB', err)
    })