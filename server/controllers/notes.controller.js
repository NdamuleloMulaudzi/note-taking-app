import {insertNote} from "../models/notes.model.js"

const createNote = async (req, res) => {
    const { user_id, note_description } = req.body;
  
    try {
      const newNote = await insertNote(user_id, note_description);
      res.json(newNote);
    } catch (error) {
      console.error("Error uploading post:", error);
      res.status(500).send("Error uploading post");
    }
  };


export {createNote}