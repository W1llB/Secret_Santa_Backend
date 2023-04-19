import { seedTable } from "../helpers";
import { pool } from "../index.js";

try {
  await seedTable();
  console.log("Table data seeded.");
} catch (err) {
  console.log(err);
} finally {
  await pool.end();
}
