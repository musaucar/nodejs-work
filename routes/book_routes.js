const express = require('express');
const router = express.Router();
const bookController = require("../controllers/book_controller");
const bookValidator = require('../schemas/bookSchema')

router.post('/books/create-books', bookValidator, bookController.createBook);

router.get('/books/:id', bookValidator, bookController.readBook);

router.delete('/books/:id', bookValidator, bookController.deleteBook);


module.exports = router