import {
  insertNote,
  modifyNote,
  fetchNotes,
  removeNote,
} from "../models/notes.model.js";

//create a note
const createNote = async (req, res) => {
  const { userId, noteDescription, color } = req.body;

  try {
    const newNote = await insertNote(userId, noteDescription, color);
    res.json(newNote);
  } catch (error) {
    console.error("Error creating a note:", error);
    res.status(500).send("Error createing a note");
  }
};

//update note description
const updateNote = async (req, res) => {
  const { noteId } = req.params;
  const { noteDescription } = req.body;

  try {
    const results = await modifyNote(noteId, noteDescription);

    if (results.rowCount === 0) {
      return res.status(404).send("note not found");
    }

    res.json(results.rows[0]);
  } catch (error) {
    console.error("Error modifying the note:", error);
    res.status(500).send("Error modifying a note ");
  }
};

//fetch notes
const getNotes = async (req, res) => {
  const { userId } = req.params;

  try {
    const resuts = await fetchNotes(userId);
    res.json(resuts.rows);
  } catch (error) {
    console.error("Error fetching notes", error);
    res.status(500).send("Error fetching notes");
  }
};

//delete note
const deleteNote = async (req, res) => {
  const { noteId } = req.params;

  try {
    const results = await removeNote(noteId);
    if (results.rowCount === 0) {
      return res
        .status(400)
        .send("note not found or you do not have permission to delete it");
    }
    res.status(200).send("note deleted successfully");
  } catch (error) {
    console.error("Error deleting a note", error);
    res.status(500).send("Error deleting a note");
  }
};
export { createNote, updateNote, getNotes, deleteNote };
