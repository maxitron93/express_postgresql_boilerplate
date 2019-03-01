require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const { errorHandler } = require('./middleware/errorHandler')
const { pool } = require('./database/pool') 
const { createTables } = require('./database/createTables')
const { insertData } = require('./database/insertData')

// Connect to the database
pool.connect()
.then(async () => {
  console.log("Database connection successful")
  
  // Start listening on the port 
  const PORT = process.env.PORT || 3000 // TODO: Update for this application
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
  })

  // Query the database for the time
  try {
    const result = await pool.query('SELECT NOW() as now')
    console.log(result.rows[0])
  } catch(error) {
    console.log(error.stack)
  }
  
  // Create tables
  // await createTables() // TODO: Already done

  // Insert data
  // await insertData() // TODO: Already done
})
.catch((error) => {
  console.log(error)
})

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Error middleware must the last middleware function
app.use(errorHandler)

// Import Routers
const routeOne = require('./routes/routeOne')
const crudRoute = require('./routes/crudRoute')

// Set base routes
app.use('/routeOne', routeOne)
app.use('/crudRoute', crudRoute)

// TODO: Only if there are front-end files to send 
// Set path for serving static files and images
// app.use(Express.static(path.join(__dirname, '../frontend/dist'))) 

// Must be last route - to serve frontend files
// app.get('*', function (req, res) {
//   try {
//     // Send the frontend file
//     return res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
//   } catch (error) {
//     // If anything errors, send the guest app
//     return res.send({ message: 'Something went wrong' })
//   }
// })
