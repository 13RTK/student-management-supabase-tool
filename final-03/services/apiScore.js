import { faker } from "@faker-js/faker";
import { supabase } from "../utils/supabase.js";

const subjects = [
  "Math",
  "English",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Geography",
  "Art",
  "Music",
  "Computer Science",
  "Business",
  "Accounting",
];

export function generateScore() {
  const semesterSeason = faker.number.int(1, 4) % 2 ? "Spring" : "Fall";
  const semesterYear = faker.number.int({
    min: 2000,
    max: new Date().getFullYear(),
  });
  const student_id = faker.number.int({ min: 1, max: 11 });

  const score = faker.number.int({ min: 0, max: 100 });
  const subject = faker.helpers.arrayElement(subjects);

  return {
    student_id,
    subject,
    score,
    semesterSeason,
    semesterYear,
  };
}

export function generateScores(count = 5) {
  return new Array(count).fill("").map(() => generateScore());
}

export async function insertScores(count = 5) {
  const students = generateScores(count);

  const { data, error } = await supabase
    .from("score")
    .insert(students)
    .select();

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}
