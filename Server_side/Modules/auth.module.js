const mongoose = require('mongoose')

const UserAuth = mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const userAuth = mongoose.model('userAuth' , UserAuth)


module.exports = userAuth