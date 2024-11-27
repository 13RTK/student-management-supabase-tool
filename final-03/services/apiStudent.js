import { faker } from "@faker-js/faker";
import { supabase } from "../utils/supabase.js";

export function generateStudent() {
  const classNum = faker.number.int({ min: 1, max: 12 });
  const grade = faker.number.int({ min: 1, max: 12 });
  const teacher_id = faker.number.int({ min: 1, max: 11 });

  return {
    name: faker.person.fullName(),
    class: classNum,
    grade,
    teacher_id,
    gender: faker.person.sex(),
    avatar: faker.image.avatar(),
  };
}

export function generateStudents(count = 5) {
  return new Array(count).fill("").map(() => generateStudent());
}

export async function insertStudents(count = 5) {
  const students = generateStudents(count);

  const { data, error } = await supabase
    .from("student")
    .insert(students)
    .select();

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}
