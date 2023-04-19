import { resetTable } from "../helpers";
import { pool } from "../index.js";

try {
  await resetTable();
  console.log("Table dropped, recreated and seeded with data");
} catch (err) {
  console.log(err);
} finally {
  await pool.end();
}
