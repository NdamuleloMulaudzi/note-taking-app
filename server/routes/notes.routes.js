import { Router } from "express";
import {createNote, deleteNote, getNotes, updateNote}  from "../controllers/notes.controller.js"

const route = Router()

route.post("/addnote", createNote)
route.put("/modifynote/:noteId", updateNote)
route.get("/fetchnote/:userId",getNotes)
route.delete("/deletenote/:noteId",deleteNote)

export default route