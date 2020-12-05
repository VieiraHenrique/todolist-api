const express = require('express');
const router = express.Router();
const {
    readAllTodos,
    createOneTodo,
    readOneTodo,
    updateOneTodo,
    deleteOneTodo,
} = require('../controllers/controllers');

router.get('/', readAllTodos);
router.post('/', createOneTodo);

router.route('/:id').get(readOneTodo).put(updateOneTodo).delete(deleteOneTodo);

module.exports = router;
