const express = require('express')
const app = express()

// Declare Routes

app.get('/', (req, res) => {
    res.send('Hello and welcome to the product API')
    })
app.listen(3000, () => {
    console.log('Api is running on Port:3000')
    })