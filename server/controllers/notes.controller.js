import { insertNote, modifyNote, fetchNotes } from "../models/notes.model.js";


//create a note
const createNote = async (req, res) => {
  const { userId, noteDescription } = req.body;

  try {
    const newNote = await insertNote(userId, noteDescription);
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



const getNotes=async(req,res)=>{
  const {userId} = req.params

  try {
    const resuts =  await fetchNotes(userId)
    res.json(resuts.rows)
  } catch (error) {
    console.error("Error fetching notes", error)
    res.status(500).send("Error fetching notes")
  }
}

export { createNote, updateNote, getNotes };
