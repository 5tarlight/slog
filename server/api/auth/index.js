const Router = require('koa-router')
const signUp = require('./signUp')

const SignUp = new Router()

SignUp.post('/signup', signUp.signup)

module.exports = SignUp