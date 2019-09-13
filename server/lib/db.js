import { createConnection } from 'mysql'
import * as config from './config.json.js'

class DB {
  static conn

  static init() {
    DB.conn = createConnection(config)
  }

  static query(query, callback) {
    DB.conn.query(query, callback)
  }
}

export default DB