import pool from "../db/db.config.js";

async function insertUser(fisrtName, lastName, email, passord) {
  const query = await pool.query(
    "INSERT INTO users(first_name, last_name, email, password) VALUES($1, $2, $3, $4)",
    [fisrtName, lastName, email, passord]
  );
  return query
}




export {insertUser}