// https://www.npmjs.com/package/jsonwebtoken
const jwt = require('jsonwebtoken')

const generateAccessToken = (userEmail)=>{
    return jwt.sign(userEmail, '1255555555555sadsssssssssssss21111111111dsffffffff', {expiresIn:"15m"})
}

let refreshTokenArr = []

const generateRefreshToken = (userEmail)=>{
    const refreshToken = jwt.sign(userEmail, 'sdfkjfnsdlfmsdşfm32984832483204efdsösfffffffff', {expiresIn:"10m"})
    refreshTokenArr.push(refreshToken)
    return refreshToken
}

module.exports = {
    generateAccessToken,
    generateRefreshToken
}