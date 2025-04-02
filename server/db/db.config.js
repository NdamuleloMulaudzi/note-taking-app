import pg from "pg";
import { configDotenv } from "dotenv";
configDotenv();

const { Pool } = pg;

const pool = new Pool({
  host: 'localhost',
  user: "postgres",
  database: 'docket',
  port: 5432,
  password: '123456',
});

export default pool;
