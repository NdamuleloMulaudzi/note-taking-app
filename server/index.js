import express from "express"
import { configDotenv } from "dotenv"

configDotenv()

const app = express()


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})