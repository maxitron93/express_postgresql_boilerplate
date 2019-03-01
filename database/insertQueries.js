// // Insert Department into departments table
// const insertDepartment = (department, division) => {
//   return `INSERT INTO DEPARTMENTS VALUES ('${department}', '${division}')`
// }

// // Insert Region into regions table
// const insertRegion = (region_id, region, country) => {
//   return `INSERT INTO REGIONS VALUES (${region_id}, '${region}', '${country}')`
// }

// // Insert Employee into employees table
// const insertEmployee = (employee_id, 
//                         first_name,
//                         last_name,
//                         email,
//                         hire_date,
//                         department,
//                         gender,
//                         salary,
//                         region_id) => {
//   return `INSERT INTO EMPLOYEES VALUES (${employee_id}, '${first_name}', '${last_name}', '${email}', '${hire_date}', '${department}', '${gender}', ${salary}, ${region_id})`
// }

// // Insert Department into departments table
// const insertDepartment = (department, division) => {
//   return `INSERT INTO DEPARTMENTS values ('${department}', '${division}')`
// }

// Insert Student into students table
const insertStudent = (student_no, student_name, age) => {
  return `INSERT INTO students VALUES (${student_no}, '${student_name}', ${age})`
}

// Insert Course into courses table
const insertCourse = (course_no, course_title, credits) => {
  return `INSERT INTO courses VALUES ('${course_no}', '${course_title}', ${credits})`
}

// Insert Enrolment into student_enrollments table
const insertEnrollment = (student_no, course_no) => {
  return `INSERT INTO student_enrollments VALUES (${student_no}, '${course_no}')`
}

// Insert Professor into professors table
const insertProfessor = (last_name, department, salary, hire_date) => {
  return `INSERT INTO professors VALUES ('${last_name}', '${department}', ${salary}, '${hire_date}')`
}

// Insert Teacher into teachers table
const insertTeacher = (last_name, course_no) => {
  return `INSERT INTO teachers VALUES ('${last_name}', '${course_no}')`
}

module.exports = {
  // insertDepartment,
  // insertRegion,
  // insertEmployee,
  insertStudent,
  insertCourse,
  insertEnrollment,
  insertProfessor,
  insertTeacher
}
