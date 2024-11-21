import { getStudents, insertStudent } from './services/apiStudent.js';

// const students = await getStudents();
// console.log(students);

const data = await insertStudent();
console.log(data);
