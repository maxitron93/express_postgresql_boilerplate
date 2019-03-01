
// NOTE: Grouping functions always return a SINGLE value back

// ************************************** //
// ***************** MAX **************** //
// ************************************** //
`SELECT MAX(${columnName}) FROM ${tableName} WHERE ${columnName} = ${attribute}`
`SELECT MAX(first_name) FROM employees WHERE department ='Tools'`
`SELECT MAX(salary) FROM employees WHERE department ='Tools'`


// ************************************** //
// ***************** MIN **************** //
// ************************************** //
`SELECT MIN(${columnName}) FROM ${tableName} WHERE ${columnName} = ${attribute}`
`SELECT MIN(first_name) FROM employees WHERE department ='Tools'`
`SELECT MIN(salary) FROM employees WHERE department ='Tools'`


// ************************************** //
// ***************** AVG **************** //
// ************************************** //
`SELECT AVG(${columnName}) FROM ${tableName} WHERE ${columnName} = ${attribute}`
`SELECT AVG(salary) FROM employees WHERE department ='Tools'`


// ************************************** //
// **************** COUNT *************** //
// ************************************** //
`SELECT COUNT(${columnName}) FROM ${tableName} WHERE ${columnName} = ${attribute}`
`SELECT COUNT(employee_id) FROM employees WHERE department ='Tools'`
// NOTE: null values will NOT be counted


// ************************************** //
// ***************** SUM **************** //
// ************************************** //
`SELECT SUM(${columnName}) FROM ${tableName} WHERE ${columnName} = ${attribute}`
`SELECT SUM(salary) FROM employees WHERE department ='Tools'`
