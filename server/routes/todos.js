const express = require('express')
const router  = express.Router()
const TodoController = require('../controllers/todoController')
const authorization  = require('../middlewares/authorization')


router.post('/', TodoController.create)
router.get('/', TodoController.findAll)

// router.use('/:id', authorization)
router.get('/:id', authorization, TodoController.findOne)
router.put('/:id', authorization, TodoController.update)
router.delete('/:id', authorization, TodoController.delete)

module.exports = router