// Import and Require NPM Packages
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to the database
const connection = mysql.createconnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'company_db'
    }
)