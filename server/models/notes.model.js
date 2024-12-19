import pool from "../db/db.config.js";

const insertNote = async (user_id, note_description,) => {
  const results = await pool.query(
    "INSERT INTO notes(user_id, note_description) VALUES($1, $2) RETURNING *",
    [user_id, note_description]
  );
  return results.rows[0];
};

export { insertNote };
