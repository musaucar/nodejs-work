const userRepository = require('../dal/user_repository.js')

const findUser = async(email)=>{
    const result = await userRepository.readUserWithEmail(email)
    return result
}

module.exports = {findUser}

