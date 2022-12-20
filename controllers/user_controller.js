const userService = require("../service/user_service")
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt')

const createUser = async (req, res, next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.send({
      success: false,
      message: 'Bad Request',
      status: 400,
      errors: errors
    })
  }
  const {email, password, phoneNumber} = req.body
  const hashedPassword = await bcrypt.hash(password, 10) // hash methodu ile password değeri belirli bir formata dönüştürür.
  try {
    const result = await userService.createUser(email, hashedPassword, phoneNumber);
    return res.send({
      success: true,
      message: 'User created',
      status: 200,
      result: result
    })
  } catch (error) {
    next(error)
  }
};

const readUser = async (req, res, next) => {
  const {id} = req.params
  try {
    const result = await userService.readUser(id);
    res.send({
      success: true,
      message: 'User found succesfully',
      status: 200,
      result: result
    })
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.send({
      success: false,
      message: 'Bad request',
      status: 400,
      errors: errors
    })
  }
  const {id} = req.params
  const {phoneNumber} = req.body
  try {
    const result = await userService.updateUser(id, phoneNumber);
    res.send({
      success: true,
      message: 'User updated succesfully',
      status: 200,
      result: result
    })
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const {id} = req.params
  try {
    const result = await userService.deleteUser(id);
    res.send({
      success: true,
      message: 'User deleted succesfully',
      status: 200,
      result: result
    })
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
};
