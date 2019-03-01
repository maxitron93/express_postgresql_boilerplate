const { asyncTryCatchRouteHandler } = require('../middleware/errorHandler.js')

// GET /routeOne/getFirst
const getFirst = asyncTryCatchRouteHandler((req, res) => {
  res.send("This routeOne works! :D")
})

// GET /routeOne/getFirst
const getSecond = asyncTryCatchRouteHandler((req, res) => {
  res.send("This routeTwo works! :D")
})

// POST /routeOne/sendJSON
const sendJSON = asyncTryCatchRouteHandler((req, res) => {
  const message = req.body.message
  res.send(message)
})

// export all controller functions required by router
module.exports = {
  getFirst,
  getSecond,
  sendJSON
}
