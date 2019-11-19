const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const DB = require('./lib/db')

const api = require('./api')

const app = new Koa()
const router = new Router()

router.use('/api', api.routes())

app.use(cors())
app.use(BodyParser())

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log("server is running on port 4000")
})