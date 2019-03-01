const express = require('express')
const router = express.Router()
const { getData, addEmployee, deleteEmployee, updateEmployee } = require('../controllers/crudRouteController')

// Request: GET /crudRoute/getData/:id
// Process: Get employee from database by id
// Response: Send The employee information
router.route('/getData/:id')
  .get(getData)

// Request: POST /crudRoute/addEmployee
// Process: Create a new employee in the database
// Response: Send back the created employee
router.route('/addEmployee')
  .post(addEmployee)

// Request: POST /crudRoute/deleteEmployee/:id
// Process: Find employee by id and delete from database
// Response: Send back deleted employee
router.route('/deleteEmployee/:id')
  .delete(deleteEmployee)

  // Request: POST /crudRoute/updateEmployee/:id
// Process: Find employee by id and update in database
// Response: Send back updated employee
router.route('/updateEmployee/:id')
  .put(updateEmployee)

module.exports = router
