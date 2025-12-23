import dotenv from 'dotenv';
import express from 'express';
import Database from 'better-sqlite3';

dotenv.config({
    path: './.env'
});

const app = express();

const db = new Database(process.env.DB_PATH);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
