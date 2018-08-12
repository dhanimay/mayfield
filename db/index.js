const { Client, Pool } = require('pg')

let connection = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
}

const client = new Client(connection)
const pool = new Pool(connection)

client.connect()

module.exports.query = function (text, params) {
  return client.query(text, params)
}
