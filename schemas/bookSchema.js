const { check } = require('express-validator')

// https://github.com/validatorjs/validator.js#validators (Validasyon Methodları ve Açıklamaları)

const bookValidator = [
    check('bookName').notEmpty({ignore_whitespace:false}).withMessage("Book name is required."),
    check('genre').notEmpty({ignore_whitespace:false}).withMessage("Gerne is required.")
]

module.exports = bookValidator;