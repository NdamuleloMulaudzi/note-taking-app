import pg from "pg";
import { configDotenv } from "dotenv";
configDotenv();

const { Pool } = pg;

const pool = new Pool({
  host: process.env.HOST,
  user: "postgres",
  database: process.env.DATABASE,
  port: process.env.PORT,
  password: process.env.PASSWORD,
});

export default pool;