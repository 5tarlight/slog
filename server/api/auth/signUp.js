module.exports.signup = ctx => {
  const { email, pw } = ctx.request.body

  ctx.body = {
    value: 'hello'
  }
}