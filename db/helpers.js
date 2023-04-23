import { pool } from "./index";
// create table
export async function createTable() {
  console.log("Table created.");
}

// droptable
export async function resetTable() {
  console.log("Table dropped.");
}

// resetTable
export async function dropTable() {
  console.log("Table reset.");
}

//seed table
export async function seedTable() {
  console.log("Seed data.");
}
