const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth_controller.js')

router.post('/login', authController.login);

router.post('/logout', authController.logout);

module.exports = router