import { supabase } from '../utils/supabase.js';

export async function getStudents() {
  const { data: student, error } = await supabase.from('student').select('*');

  if (error) {
    console.log(error.message);
    return;
  }

  return student;
}

export async function insertStudent() {
  const { data, error } = await supabase
    .from('student')
    .insert([{ name: 'John', class: 2, grade: 7, gender: 'male' }])
    .select();

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}
