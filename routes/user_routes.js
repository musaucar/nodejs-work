const express = require('express')
const router = express.Router()
const userController = require('../controllers/user_controller')
const loginValidator = require('../schemas/all-schemas.js')
const updateUserValidator = require('../schemas/all-schemas.js')

router.post('/user/', loginValidator , userController.createUser)

router.get('/user/:id', loginValidator  ,userController.readUser)  

router.put('/user/:id', updateUserValidator ,userController.updateUser)

router.delete('/user/:id', loginValidator  ,userController.deleteUser)


module.exports = router


