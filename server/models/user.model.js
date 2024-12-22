import pool from "../db/db.config.js";

async function fetchUserByEmail(email) {
  const query = await pool.query(
    "SELECT * FROM users WHERE LOWER(email)=LOWER($1)",
    [email]
  );
  return query;
}

async function fetchUserById(userId) {
  const query = await pool.query("SELECT * FROM users WHERE user_id=$1", [
    userId,
  ]);
  return query.rows[0];
}

export { fetchUserByEmail, fetchUserById };
