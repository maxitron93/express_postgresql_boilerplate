// Select everything from a table
`SELECT * FROM ${tableName}`
`SELECT * FROM employees`


// Select column from a table
`SELECT ${columnName} FROM ${tableName}`
`SELECT first_name FROM employees`


// Select multiple columns from a table
`SELECT ${columnName}, ${columnName}, ${columnName} FROM ${tableName}`
`SELECT employee_id, hire_date, email FROM employees`


// ************************************** //
// ***************** WHERE ************** //
// ************************************** //
// Filter selection with WHERE - equal
`SELECT * FROM ${tableName} WHERE ${columnName} = '${attribute}'`
`SELECT * FROM employees WHERE department = 'Sports'`


// Filter selection with WHERE - similar match
`SELECT * FROM ${tableName} WHERE ${columnName} LIKE '%${attribute}%'`
`SELECT * FROM employees WHERE department LIKE 'F%rn%'`


// Filter selection with WHERE - greater than or equal to
`SELECT * FROM ${tableName} WHERE ${columnName} >= '${number}'`
`SELECT * FROM employees WHERE salary >= '100000'`

// ************************************** //
// **************** AND OR ************** //
// ************************************** //
// Filter with multiple conditions - AND
`SELECT * from ${tableName} 
WHERE ${columnName} = '${attribute}' 
AND ${columnName} > '${number}'
AND ${columnName} = '${attribute}'`

`SELECT * FROM employees 
WHERE department = 'Clothing' 
AND salary > '100000' 
AND region_id = '2'`


// Filter with multiple conditions - OR
`SELECT * from ${tableName} 
WHERE ${columnName} = '${attribute} '
OR ${columnName} > '${number}'
OR ${columnName} = '${attribute}'`

`SELECT * FROM employees
WHERE department = 'Clothing'
OR salary > '120000'
OR region_id = '2'`


// Filter with multiple condition - AND + OR
`SELECT * FROM ${tableName} 
WHERE ${columnName} = '${attribute}' 
AND (${columnName} > '${attribute}' OR ${columnName} = '${attribute}' OR ${columnName} = '${attribute}')`

`SELECT * FROM employees 
WHERE department = 'Clothing' 
AND (salary > '100000' OR region_id = '2' OR region_id = '5')`

// ************************************** //
// ******* NOT ! <> IS IN BETWEEN ******* //
// ************************************** //
// NOT
`SELECT * FROM ${tableName} WHERE NOT ${columnName} = '${attribute}'`
`SELECT * FROM employees WHERE NOT department = 'Sports'`

// !=
`SELECT * FROM ${tableName} WHERE ${columnName} != '${attribute}'`
`SELECT * FROM employees WHERE department != 'Sports'`

// <>
`SELECT * FROM ${tableName} WHERE ${columnName} <> '${attribute}'`
`SELECT * FROM employees WHERE department <> 'Sports'`

// Selecting by null - have to use IS, cannot use =
`SELECT * FROM ${tableName} WHERE ${columnName} IS NULL`
`SELECT * FROM employees WHERE email IS NULL`

// Selecting by NOT null
`SELECT * FROM ${tableName} WHERE ${columnName} IS NOT NULL`
`SELECT * FROM employees WHERE email IS NOT NULL`
`SELECT * FROM ${tableName} WHERE NOT ${columnName} IS NULL`
`SELECT * FROM employees WHERE NOT email IS NULL`

// Filter multiple attributes using IN (alternative to using multiple ORs)
`SELECT * FROM ${tableName} WHERE ${columnName} IN ('${attribute}', '${attribute}', '${attribute}')`
`SELECT * FROM employees WHERE department IN ('Toys', 'Sports', 'Garden')`

// BETWEEN - this is inclusive
`SELECT * FROM ${tableName} WHERE ${columnName} BETWEEN '${number}' AND '${number}'` 
`SELECT * FROM employees WHERE salary BETWEEN '80000' AND '100000'`

