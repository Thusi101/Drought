const { Pool } = require('pg');
const dbConfig = require('../config/database.json');

const pool = new Pool(dbConfig);

const initDb = async () => {
    try {
        await pool.connect();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

const executeQuery = async (query, params) => {
    const client = await pool.connect();
    try {
        const result = await client.query(query, params);
        return result.rows;
    } catch (error) {
        console.error('Query execution error:', error);
        throw error;
    } finally {
        client.release();
    }
};

module.exports = { initDb, executeQuery };

