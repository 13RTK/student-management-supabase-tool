import { insertScores } from "./services/apiScore.js";
import { insertStudents } from "./services/apiStudent.js";
import { generateTeacher, insertTeachers } from "./services/apiTeacher.js";

// const students = await getStudents();
// console.log(students);

// const data = await insertStudent();
// console.log(data);

// const teacher = generateTeacher();
// console.log(teacher);

// const data = await insertTeachers(10);
// console.log(data);

// const data = await insertStudents(10);
// console.log(data);
const data = await insertScores(10);
console.log(data);
