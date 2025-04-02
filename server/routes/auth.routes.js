import {Router} from "express"
import { login, registerUser } from "../controllers/auth.controller.js"

const route = Router()

route.post("/register", registerUser )
route.post("/login",login)

export default route