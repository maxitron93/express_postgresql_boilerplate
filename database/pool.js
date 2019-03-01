const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.POSTGRES_USER, // TODO: Update for this application
  password: process.env.POSTGRES_PASSWORD, // TODO: Update for this application
  host: process.env.POSTGRES_HOST, // TODO: Update for this application
  port: process.env.POSTGRES_PORT, // TODO: Update for this application
  database: process.env.POSTGRES_DATABASE // TODO: Update for this application
})

module.exports = {
  pool
}
