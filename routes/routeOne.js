const express = require('express')
const router = express.Router()
const routeOneController = require('../controllers/routeOneController')

// Request: GET /routeOne/getFirst
// Process: nothing
// Response: Send "This routeOne works! :D"
router.route('/getFirst')
  .get(routeOneController.getFirst)

// Request: GET /routeOne/getSecond
// Process: nothing
// Response: Send "This routeTwo works! :D"
router.route('/getSecond')
  .get(routeOneController.getSecond)

// Request: POST /routeOne/sendJSON
// Process: take json from body
// Response: Send back message within JSON object
router.route('/sendJSON')
  .post(routeOneController.sendJSON)

module.exports = router
