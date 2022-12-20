const user = require('./user_routes')
const book = require('./book_routes')
const auth = require('./auth-routes.js')
module.exports = [
    user,
    book,
    auth
]