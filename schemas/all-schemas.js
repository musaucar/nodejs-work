const { check } = require('express-validator')

// https://github.com/validatorjs/validator.js#validators (Validasyon Methodları ve Açıklamaları)

const loginValidator = [
    check('email').isEmail().withMessage('email is not valid').notEmpty({ignore_whitespace:true}).withMessage('email cannot be empty').exists({checkNull:true}).withMessage('email required'),
    check('password').isStrongPassword({
        minLength: 6,
        minLowercase:1,
        minNumbers:1,
        minUppercase:1,
        minSymbols: 0,
    }).withMessage('weak password , try again').isLength({max:20}) .withMessage('password cannot more 20'),
    check('phoneNumber').isMobilePhone().withMessage('Please enter a valid phone number.')
]

const updateUserValidator = [
    check('phoneNumber').isMobilePhone().withMessage("Please enter a valid phone number.")
]

module.exports = loginValidator, updateUserValidator
