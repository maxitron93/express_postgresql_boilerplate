const { pool } = require('./pool')

const createTables = async () => {
  // 1. Get all existing tables
  const tables_information = await pool.query(`SELECT table_name 
                                  FROM information_schema.tables
                                  WHERE table_schema='public'
                                  AND table_type='BASE TABLE'`)
  const table_names = tables_information.rows.map((current, index, array) => {
    return current.table_name
  })

  // 2. Create test table
  if (!table_names.includes('test')) {

    // Table schema
    await pool.query(`CREATE TABLE test(
                    id SERIAL PRIMARY KEY, 
                    text VARCHAR(40) not null, 
                    complete BOOLEAN)`)

    console.log('test table created')
  } else {
    console.log('Table already exists')
  }
}

module.exports = {
  createTables
}
