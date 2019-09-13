module.exports.signup = ctx => {
  console.dir(ctx.request.body)

  ctx.body = {
    value: 'hello'
  }
}