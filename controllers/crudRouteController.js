const { pool } = require('../database/pool')
const { asyncTryCatchRouteHandler } = require('../middleware/errorHandler.js')

// GET /crudRoute/getData/:id
const getData = asyncTryCatchRouteHandler(async (req, res) => {
  const employee_id = req.params.id
  const employee = await pool.query(`SELECT * FROM employees WHERE employee_id = '${employee_id}'`)
  if (employee.rowCount != 0) {
    res.send(employee.rows[0])
  } else {
    res.send("Error: Employee not found")
  }
})

// POST /crudRoute/addEmployee/
const addEmployee = asyncTryCatchRouteHandler(async (req, res) => {
  const employee_info = req.body
  const result = await pool.query(
    `INSERT INTO employees VALUES (
    '${employee_info.employee_id}',
    '${employee_info.first_name}', 
    '${employee_info.last_name}', 
    '${employee_info.email}', 
    '${employee_info.hire_date}', 
    '${employee_info.department}', 
    '${employee_info.gender}', 
    '${employee_info.salary}', 
    '${employee_info.region_id}')`
    )
  res.send(result)
})

// DELETE /crudRoute/deleteEmployee/:id
const deleteEmployee = asyncTryCatchRouteHandler(async (req, res) => {
  const employee_id = req.params.id 
  const result = await pool.query(`DELETE FROM employees WHERE employee_id = '${employee_id}'`)
  if(result.rowCount != 0) {
    res.send(result)
  } else {
    res.send("Error: Employee not found")
  }
})

// PUT /crudRoute/updateEmployee/:id
const updateEmployee = asyncTryCatchRouteHandler(async (req, res) => {
  const employee_id = req.params.id
  const new_employee_info = req.body
  const result = await pool.query(
    `UPDATE employees 
    SET first_name = '${new_employee_info.first_name}', 
    last_name = '${new_employee_info.last_name}', 
    email = '${new_employee_info.email}', 
    hire_date = '${new_employee_info.hire_date}', 
    department = '${new_employee_info.department}', 
    gender = '${new_employee_info.gender}', 
    salary = '${new_employee_info.salary}', 
    region_id = '${new_employee_info.region_id}'
    WHERE employee_id = '${employee_id}'`
    )
  if (result.rowCount != 0) {
    res.send(result)
  } else {
    res.send("Error: Employee not found")
  }
})


// export all controller functions required by router
module.exports = {
  getData,
  addEmployee,
  deleteEmployee,
  updateEmployee
}
