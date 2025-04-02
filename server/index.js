import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import { configDotenv } from "dotenv";
import notesRoutes from "./routes/notes.routes.js"
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
configDotenv();

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.use("/auth",authRoutes)
app.use("/user", userRoutes)
app.use("/notes", notesRoutes)
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
