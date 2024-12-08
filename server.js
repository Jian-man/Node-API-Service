require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')  
const userRoute = require('./routes/userRoute') 

const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//  Routes

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)


app.get('/', (req, res) => {
    res.send('Hello and welcome to the product API')
    })
app.get('/blog', (req, res) => {
    res.send('Hello blog')
    })

// Connect to MongoDB

mongoose.connect(MONGO_URL)

.then(() => {
    app.listen(PORT, () => {
    console.log('Api is running on port ${PORT}')
    });
    console.log('Connected to MongoDB')
    }).catch((err) => { 
        console.log('Error connecting to MongoDB', err)
    })