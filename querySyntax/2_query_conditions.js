// ************************************** //
// *************** ORDER BY ************* //
// ************************************** //
// Ordery by employee ID - smallest to largest by default
`SELECT * FROM ${tableName} WHERE ${columnName} = '${attribute}' ORDER BY ${columnName}`
`SELECT * FROM employees WHERE department = 'Tools' ORDER BY employee_id`

// Order by employee ID - largest to smallest with desc
`SELECT * FROM ${tableName} WHERE ${columnName} = '${attribute}' ORDER BY ${columnName} desc`
`SELECT * FROM employees WHERE department = 'Tools' ORDER BY employee_id desc`

// Order by employee ID - smallest to largest with asc
`SELECT * FROM ${tableName} WHERE ${columnName} = '${attribute}' ORDER BY ${columnName} asc`
`SELECT * FROM employees WHERE department = 'Tools' ORDER BY salary asc`

// Order by the second column
`SELECT * FROM ${tableName} WHERE ${columnName} = '${attribute}' ORDER BY ${columnNumber}`
`SELECT * FROM employees WHERE department = 'Tools' ORDER BY 2`


// ************************************** //
// *************** DISTINCT ************* //
// ************************************** //
// Return unique departments from the employees table
`SELECT DISTINCT ${columnName} FROM ${tableName}`
`SELECT DISTINCT department FROM employees`


// ************************************** //
// ********* LIMIT, FETCH FIRST ********* //
// ************************************** //
// Get the first 10 items from the query
`SELECT * FROM ${tableName} LIMIT 10`
`SELECT * FROM employees LIMIT 10`

// Get the first 10 items from the query
`SELECT * FROM ${tableName} FETCH FIRST 10 ROWS ONLY`
`SELECT * FROM employees FETCH FIRST 10 ROWS ONLY`


// ************************************** //
// ********* Renaming columns *********** //
// ************************************** //
// Change the name of the column - useful for reporting purposes
`SELECT ${columnName}, ${columnName}, ${columnName}, ${columnName} AS ${name} from ${tableName}`
`SELECT first_name, last_name, hire_date, salary AS "Yearly Salary" from employees`
