import { createConnection } from 'mysql'
import * as config from './config.json'

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

export default Database