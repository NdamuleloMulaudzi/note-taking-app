import { Router } from "express";
import {createNote}  from "../controllers/notes.controller.js"

const route = Router()

route.post("/addnote", createNote)

export default route