const Router = require('koa-router')
const auth = require('./auth.ctrl')

const Auth = new Router()

Auth.post('/signup', auth.register)

module.exports = Auth