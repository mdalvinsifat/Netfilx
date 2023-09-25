const express = require('express')
const { AuthSignUp, AuthSign } = require('../Config/Auth')



const Auth = express.Router()


Auth.post("/auth/signIn", AuthSign)
Auth.post("/auth/signUp", AuthSignUp)


module.exports = Auth