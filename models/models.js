const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  description: { type: String, default: 'No description' },
  done: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
})

const Todo = mongoose.model('TodoItem', schema)
module.exports = Todo
