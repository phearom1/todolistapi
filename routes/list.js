const express = require('express')
const {
  getAllFunction,
  postFunction,
  deleteAllFunction,
  getOneFunction,
  deleteOneFunction,
} = require('./functions/list.function')

const router = express.Router()

router
  .route('/')
  .get(getAllFunction)
  .post(postFunction)
  .delete(deleteAllFunction)

router.route('/:id').get(getOneFunction).delete(deleteOneFunction)

module.exports = router
