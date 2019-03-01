// ************************************** //
// ************ CREATE TABLE ************ //
// ************************************** //
`CREATE TABLE ${tableName}(
  ${columnName} ${dataType},
  ${columnName} ${dataType},
  ${columnName} ${dataType},
)`
`CREATE TABLE students(
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  age INT
  )`

  
// ************************************** //
// ************* INSERT DATA ************ //
// ************************************** //
`INSERT INTO students VALUES ('${valueForColumn1}', '${valueForColumn1}', '${valueForColumn3}')`
`INSERT INTO students VALUES ('Maxi', 'Merrillees', 25)`


// ************************************** //
// ************* DELETE DATA ************ //
// ************************************** //
`DELETE FROM ${tableName} WHERE ${columnName} = '${attribute}'`
`DELETE FROM students WHERE last_name = 'Merrillees'`


// ************************************** //
// ************* UPDATE DATA ************ //
// ************************************** //
// NOTE: VERY IMPORTATNT TO INCLUDE 'WHERE'. IF 'WHERE' is OMITTED, ALL RECORDS IN THE TABLE WILL BE UPDATED
`UPDATE ${tableName} SET ${columnName} = '${newValue}', ${columnName} = '${newValue}' WHERE ${columnName} = '${attribute}'`
`UPDATE students SET last_name = 'Telula', age = '26' WHERE student_id = '1'`


