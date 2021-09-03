const Todo = require('../../models/models')

const getAllFunction = async (req, res) => {
  await Todo.find({})
    .then(result => res.status(200).json(result))
    .catch(err => console.error(err))
}

const postFunction = async (req, res) => {
  const { name, description, done } = req.body
  const newTodo = new Todo({ name, description, done })
  await newTodo
    .save()
    .then(result => res.status(201).json(result))
    .catch(err => console.error(err))
}

const deleteAllFunction = async (req, res) => {
  await Todo.deleteMany({})
    .then(result => res.status(201).json(result))
    .catch(err => console.error(err))
}

const getOneFunction = async (req, res) => {
  const { id } = req.params
  await Todo.findById(id)
    .then(result => res.status(200).json(result))
    .catch(err => console.error(err))
}

const deleteOneFunction = async (req, res) => {
  const { id } = req.params
  await Todo.findByIdAndDelete(id)
    .then(() => res.status(201).json({ deletedCount: 1 }))
    .catch(err => console.error(err))
}
module.exports = {
  getAllFunction,
  postFunction,
  deleteAllFunction,
  getOneFunction,
  deleteOneFunction,
}
