const mongoose = require('mongoose')


const MongooseSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const Auth = mongoose.model("auth", MongooseSchema)

module.exports = Auth
