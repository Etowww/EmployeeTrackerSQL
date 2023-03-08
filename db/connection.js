const mysql = require('mysql2');

// Connect to the database
const connection = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'company_db'
    },
    console.log(`Connected to the company_db`)
);

module.exports = connection;