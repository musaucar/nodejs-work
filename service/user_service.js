const userRepository  = require('../dal/user_repository')

const createUser = async (email, password, phoneNum)=>{
    try {
        const result = await userRepository.createUser(email, password, phoneNum)
        return result
    } catch (error) {
        next(error)
    }
}

const readUser = async (id)=>{
    try {
        const result = await userRepository.readUser(id)
        return result
    } catch (error) {
        next(error)
    }
}

const updateUser = async (id, phoneNum)=>{
    try {
        const result = await userRepository.updateUser(id, phoneNum)
        return result
    } catch (error) {
        next(error)
    }  
}

const deleteUser = async (id)=>{
    try {
        const result = await userRepository.deleteUser(id)
        return result
    } catch (error) {
        next(error)
    }   
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}