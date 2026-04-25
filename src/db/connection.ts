import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'auth-db1872.hstgr.io',
  user: process.env.DB_USER || 'u961893888_sh_db_website',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'u961893888_SH_db_250426',
  port: parseInt(process.env.DB_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
