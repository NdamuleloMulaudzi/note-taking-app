import { Router } from "express";
import { getUserByEmail } from "../controllers/user.controller.js";

const route = Router();

route.get("/getuser", getUserByEmail);

export default route
