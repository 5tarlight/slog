const { createConnection } = require('mysql')
const config = require('./config.json')

class Database {
  constructor () {
    this.connection = createConnection(config.db)
  }

  query (sql, values) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, rows) => {
        if (err) { return reject(err) }
        resolve(rows)
      })
    })
  }

  close () {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) { return reject(err) }
        resolve()
      })
    })
  }
}

module.exports = Database