const mysql = require('mysql2/promise');

// Connect to the database
const connection = async () => {
    const db = await mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'company_db'
    },
    console.log(`Connected to the company_db`)
    );
    return db
};
module.exports = connection;