const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')


// Connect Database
mongoose.connect(process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database"))


// Accept JSON as a body
app.use(express.json())

// Route
const subscribersRouter = require('./routes/subscribers')

// Use Route
app.use('/subscribers', subscribersRouter)

// Listen to port server
app.listen(5024, () => console.log('Server running on port 5024'))