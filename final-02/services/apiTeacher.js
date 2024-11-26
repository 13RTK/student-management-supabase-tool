import { faker } from "@faker-js/faker";
import { supabase } from "../utils/supabase.js";

function generateClass() {
  const classNum = faker.number.int({ min: 1, max: 12 });
  const grade = faker.number.int({ min: 1, max: 12 });

  return `${classNum}|${grade}`;
}

export function generateTeacher() {
  const classCount = faker.number.int({ min: 1, max: 5 });
  const class_in_charge = JSON.stringify(
    new Array(classCount).fill("").map(() => generateClass())
  );

  return {
    name: faker.person.fullName(),
    class_in_charge,
    gender: faker.person.sex(),
    avatar: faker.image.avatar(),
  };
}

export function generateTeachers(count = 5) {
  return new Array(count).fill("").map(() => generateTeacher());
}

export async function insertTeachers(count = 5) {
  const teachers = generateTeachers(count);

  const { data, error } = await supabase
    .from("teacher")
    .insert(teachers)
    .select();

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}
