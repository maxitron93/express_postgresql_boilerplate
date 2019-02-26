require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const { client } = require('./db_client')

// Connect to the database
client.connect()
.then(() => {
  console.log("Database connection successful")
  
  // Start listening on the port 
  const PORT = process.env.PORT || 3000 // TODO: Update for this application
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
  })

  // Query the database for the time
  client.query('SELECT NOW() as now')
    .then((result) => {
      console.log(result.rows[0])
    })
    .catch((error) => {
      console.log(error.stack)
    })
})
.catch((error) => {
  console.log(error)
})

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Import Routers
const routeOne = require('./routes/routeOne')

// Set base routes
app.use('/routeOne', routeOne)

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

