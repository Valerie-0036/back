import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config({ path: './config/.env' });

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}).promise();

//  destructuring, taking the first item from results
async function getNotes() {
  const [rows] = await pool.query('SELECT * from notes');
  // const rows = result[0];
  return rows;
}

const notes = await getNotes();
console.log(notes);
