require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// DB Connection
// TODO: 

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Import Routers
const routeOne = require('./routes/routeOne')
// const routeTwo = require('./routes/routeTwo')

// Set base routes
app.use('/routeOne', routeOne)
// app.use('/routeTwo', routeTwo)

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

// Get the port number from the environment variable PORT 
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
