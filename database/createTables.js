const { pool } = require('./pool')

const createTables = async () => {
  // 1. Get all existing tables
  const tables_information = await pool.query(`SELECT table_name 
                                  FROM information_schema.tables
                                  WHERE table_schema='public'
                                  AND table_type='BASE TABLE'`)
  const table_names = tables_information.rows.map((current, index, array) => {
    return current.table_name
  })

  // 2. Create students table
  if (!table_names.includes('students')) {

    // Table schema
    await pool.query(`CREATE TABLE students(
                    student_no INT,
                    student_name VARCHAR(20),
                    age INT
                    )`)

    console.log('students table created')
  } else {
    console.log('students table already exists')
  }

  // 3. Create courses table
  if (!table_names.includes('courses')) {

    // Table schema
    await pool.query(`CREATE TABLE courses(
                    course_no VARCHAR(5),
                    course_title VARCHAR(20),
                    credits INT
                    )`)

    console.log('courses table created')
  } else {
    console.log('courses table already exists')
  }

  // 4. Create student_enrollments table
  if (!table_names.includes('student_enrollments')) {

    // Table schema
    await pool.query(`CREATE TABLE student_enrollments(
                    student_no INT,
                    course_no VARCHAR(5)
                    )`)

    console.log('student_enrollments table created')
  } else {
    console.log('student_enrollments table already exists')
  }

  // 5. Create professors table
  if (!table_names.includes('professors')) {

    // Table schema
    await pool.query(`CREATE TABLE professors(
                    last_name VARCHAR(20),
                    department VARCHAR(12),
                    salary INT,
                    hire_date DATE
                    )`)

    console.log('professors table created')
  } else {
    console.log('professors table already exists')
  }

  // 5. Create teachers table
  if (!table_names.includes('teachers')) {

    // Table schema
    await pool.query(`CREATE TABLE teachers(
                    last_name VARCHAR(20),
                    course_no VARCHAR(5)
                    )`)

    console.log('teachers table created')
  } else {
    console.log('teachers table already exists')
  }
}

module.exports = {
  createTables
}


// // 2. Create departments table
// if (!table_names.includes('departments')) {

//   // Table schema
//   await pool.query(`create table departments(
//                   department VARCHAR(100), 
//                   division VARCHAR(100), 
//                   primary key (department))`)

//   console.log('departments table created')
// } else {
//   console.log('departments table already exists')
// }

// // 3. Create regions table
// if (!table_names.includes('regions')) {

//   // Table schema
//   await pool.query(`create table regions(
//                   region_id INT,
//                   region VARCHAR(20),
//                   country VARCHAR(20),
//                   primary key (region_id))`)

//   console.log('regions table created')
// } else {
//   console.log('regions table already exists')
// }

// // 4. Create employees table
// if (!table_names.includes('employees')) {

//   // Table schema
//   await pool.query(`create table employees(
//                   employee_id INT,
//                   first_name VARCHAR(50),
//                   last_name VARCHAR(50),
//                   email VARCHAR(50),
//                   hire_date DATE,
//                   department VARCHAR(17),
//                   gender VARCHAR(1),
//                   salary INT,
//                   region_id INT,
//                   primary key (employee_id))`)

//   console.log('employees table created')
// } else {
//   console.log('employees table already exists')
// }
