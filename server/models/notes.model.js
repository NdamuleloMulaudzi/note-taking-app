import pool from "../db/db.config.js";

//inserting note model
async function insertNote(userId, noteDescription) {
  const query = await pool.query(
    "INSERT INTO notes(user_id, note_description) VALUES($1, $2) RETURNING *",
    [userId, noteDescription]
  );
  return query.rows[0];
}

//modify note modle
async function modifyNote(noteID, noteDescription) {
  const query = await pool.query(
    "UPDATE notes SET note_description=$2 WHERE note_id=$1 RETURNING *",
    [noteID, noteDescription]
  );
  return query;
}

//fetch notes model
async function fetchNotes(userId) {
  const query = await pool.query("SELECT * FROM notes WHERE user_id=$1", [
    userId,
  ]);
  return query;
}

async function removeNote(noteId) {
  const query = pool.query("DELETE FROM notes WHERE note_id=$1", [noteId]);
  return query
}

export { insertNote, modifyNote, fetchNotes, removeNote };
