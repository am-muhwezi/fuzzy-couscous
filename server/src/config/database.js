import dotenv from 'dotenv';

const Database = require('better-sqlite3');

dotenv.config();

const db = new Database(process.env.DB_PATH);

module.exports = db;