const authService = require('../service/auth_service.js')
const bcrypt = require('bcrypt')
const  {generateAccessToken,generateRefreshToken} = require('../util/token-processes.js')

const login = async(req,res)=>{

    const {email, password} = req.body
    const user = authService.findUser(email)
    console.log(user)
    // girilen email db de var mı
    if(user === null) {
        return res.send({
            success: false,
            message: 'User Not Found, not exist email value',
            status: 404,
        })
    }
    if(await bcrypt.compare(password, user.password)){
        const accessToken = generateAccessToken(user.email)
        const refreshToken = generateRefreshToken(user.email)
        return res.send({
            success: true,
            message: 'tokenlar verildi',
            status: 200,
            accessToken: accessToken,
            refreshToken: refreshToken
        })
    }else{
        return res.send({
            success: false,
            message: 'wrong password, try again',
            status: 400, // şifre yanlış ise hangi http status code
        })
    }


}

const logout = async(req,res) =>{

}

module.exports = {
    login,
    logout
}

