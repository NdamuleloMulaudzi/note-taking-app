import { Router } from "express";
import {createNote, updateNote}  from "../controllers/notes.controller.js"

const route = Router()

route.post("/addnote", createNote)
route.put("/modifynote/:noteId", updateNote)

export default route