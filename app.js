require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Todo = require('./models/models')
const listRouter = require('./routes/list')

const app = express()
const port = process.env.PORT || 8000

//just some bodyparser that i dont fully understand yet
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/list', listRouter)

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(port, () => console.log("server listening on port " + port)))
  .catch((err) => console.error(err))
