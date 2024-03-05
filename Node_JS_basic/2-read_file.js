const fs = require('fs');

function countStudents(path) {
  let fileContents = '';

  // We try to read the file with the path variable
  try {
    fileContents = fs.readFileSync(path, 'utf8');

  // If it fails, we throw a new error
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // We split the contents of the file into lines and
  // store them into an array. We ommit the first line
  let lines = fileContents.split('\n').slice(1);

  // We delete all empty lines from the array
  lines = lines.filter((line) => line !== '');

  // This for loop converts the CSV file into an array of objects
  const students = [];
  for (const line of lines) {
    const lineArray = line.split(',');
    const student = {
      firstName: lineArray[0],
      lastName: lineArray[1],
      age: lineArray[2],
      field: lineArray[3],
    };
    students.push(student);
  }

  // Now, we sort the array of objects by the attribute 'field'
  students.sort((a, b) => {
    if (a.field < b.field) return -1;
    if (a.field > b.field) return 1;
    return 0;
  });

  // We print the total number of students
  console.log(`Number of students: ${students.length}`);

  // This for loop gets and prints the total number of students in a field
  let field = '';
  for (const student of students) {
    if (field !== student.field) {
      const studentsPerField = students.filter((obj) => obj.field === student.field);
      let firstNames = studentsPerField.map((obj) => obj.firstName);
      firstNames = firstNames.join(', ');
      process.stdout.write(`Number of students in ${student.field}: ${studentsPerField.length}. `);
      console.log(`List: ${firstNames}`);
      field = student.field;
    }
  }
}

module.exports = countStudents;
