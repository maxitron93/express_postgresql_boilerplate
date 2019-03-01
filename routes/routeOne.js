const express = require('express')
const router = express.Router()
const { getFirst, getSecond, sendJSON } = require('../controllers/routeOneController')

// Request: GET /routeOne/getFirst
// Process: nothing
// Response: Send "This routeOne works! :D"
router.route('/getFirst')
  .get(getFirst)

// Request: GET /routeOne/getSecond
// Process: nothing
// Response: Send "This routeTwo works! :D"
router.route('/getSecond')
  .get(getSecond)

// Request: POST /routeOne/sendJSON
// Process: take json from body
// Response: Send back message within JSON object
router.route('/sendJSON')
  .post(sendJSON)

module.exports = router
