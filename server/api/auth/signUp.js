const DB = require('../../lib/db')
const qsb = require('node-qsb')

module.exports.signup = ctx => {
  const { email, pw } = ctx.request.body
  const rj = {
    status: 200,
    err: null
  }

  const params = {
    cols: ['email', 'pw', 'verified'],
    vals: [email, pw, 0]
  }

  const qs = new qsb()
    .insert('user')
    .values(params.cols, params.vals)
    .build()
  
  DB.query(qs.returnString(), (err, results, fields) => {
    if(err) {
      ctx.body = {
        status: 400,
        err: err
      }
      return
    }

  })
  ctx.body = rj
}