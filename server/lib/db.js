const mysql = require('mysql')
const config = require('./config.json')

let conn

module.exports.init = () => {
  conn = mysql.createConnection(config)
}

module.exports.query = (query, callback) => {
  conn.query(query, callback)
}
