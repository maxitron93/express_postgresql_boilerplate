const { pool } = require('./pool')
// const { departmentsData, regionsData, employeesData } = require('./data')
// const { insertDepartment, insertRegion, insertEmployee } = require('./queries')
const { studentData, courseData, enrollmentData, professorData, teacherData } = require('./data')
const { insertStudent, insertCourse, insertEnrollment, insertProfessor, insertTeacher } = require('./insertQueries')

const insertData = () => {
  // // Insert department data
  // departmentsData.forEach(async (current, index, array) => {
  //   try{
  //     await pool.query(insertDepartment(...current))
  //     console.log(`Department ${parseInt(index) + 1} Added`)
  //   } catch(error) {
  //     console.log(error.detail)
  //   }
  // })

  // // Insert region data
  // regionsData.forEach(async (current, index, array) => {
  //   try {
  //     await pool.query(insertRegion(...current))
  //     console.log(`Region ${parseInt(index) + 1} Added`)
  //   } catch(error) {
  //     console.log(error.detail)
  //   }
  // })

  // // Insert employee data
  // employeesData.forEach(async (current, index, array) => {
  //   try {
  //     await pool.query(insertEmployee(...current))
  //     console.log(`Employee ${parseInt(index) + 1} Added`)
  //   } catch(error) {
  //     console.log(error.detail)
  //   }
  // })

  // Insert student data
  studentData.forEach(async (current, index, array) => {
    try{
      await pool.query(insertStudent(...current))
      console.log(`Student ${parseInt(index) + 1} Added`)
    } catch(error) {
      console.log(error)
    }
  })

  // Insert course data
  courseData.forEach(async (current, index, array) => {
    try{
      await pool.query(insertCourse(...current))
      console.log(`Course ${parseInt(index) + 1} Added`)
    } catch(error) {
      console.log(error)
    }
  })

  // Insert enrollment data
  enrollmentData.forEach(async (current, index, array) => {
    try{
      await pool.query(insertEnrollment(...current))
      console.log(`Enrollment ${parseInt(index) + 1} Added`)
    } catch(error) {
      console.log(error)
    }
  })

  // Insert professor data
  professorData.forEach(async (current, index, array) => {
    try{
      await pool.query(insertProfessor(...current))
      console.log(`Professor ${parseInt(index) + 1} Added`)
    } catch(error) {
      console.log(error)
    }
  })

  // Insert teacher data
  teacherData.forEach(async (current, index, array) => {
    try{
      await pool.query(insertTeacher(...current))
      console.log(`Teacher ${parseInt(index) + 1} Added`)
    } catch(error) {
      console.log(error)
    }
  })
}

module.exports = {
  insertData
}
