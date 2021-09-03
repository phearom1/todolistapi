require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const Todo = require('./models/models')
const listRouter = require('./routes/list')

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/list', listRouter)

mongoose.connect(process.env.CONNECTION_URL, () => {
  console.log('Database connected')
  app.listen(port, () => console.log(`server running on port ${port}`))
})
