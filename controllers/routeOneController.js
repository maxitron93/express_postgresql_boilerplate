// const { TestModel } = require('../models/TestModel')

// GET /routeOne/getFirst
const getFirst = (req, res) => {
  res.send("This routeOne works! :D")
}

// GET /routeOne/getFirst
const getSecond = (req, res) => {
  res.send("This routeTwo works! :D")
}

// POST /routeOne/sendJSON
const sendJSON = (req, res) => {
  const message = req.body.message
  res.send(message)
}

// export all controller functions required by router
module.exports = {
  getFirst,
  getSecond,
  sendJSON
}
