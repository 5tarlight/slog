const Router = require('koa-router')
const signUp = require('./auth.ctrl')

const SignUp = new Router()

SignUp.post('/signup', signUp.signup)

module.exports = SignUp