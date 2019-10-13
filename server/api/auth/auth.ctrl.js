const Database = require('../../lib/db')

module.exports.signup = async ctx => {
  const { email, pw } = ctx.request.body

  const params = {
    cols: ['email', 'pw', 'verified'],
    vals: [email, pw, 0]
  }

  const fail = {
    code: 500,
    msg: 'Server Error'
  }

  const succ = {
    code: 200,
    msg: 'Success'
  }

  const query = `INSERT INTO user (email, pw, verified) VALUES (?, ?, 0)`
  const DB = new Database()

  DB.query(query, [email, pw]) 
  ctx.status = 200
  ctx.body = JSON.stringify(succ)
}