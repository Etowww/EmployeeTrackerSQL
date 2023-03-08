// Import and Require NPM Packages
const inquirer = require('inquirer');
const Information = require('./db/query')
const connection = require('./db/connection')

const info = new Information(connection);


const menuQuestions = [
    {
        message: 'What would you like to do?',
        type: 'list',
        name: 'userChoice',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add A Role',
            'Add An Employee',
            'Update an Employee Role',
            'exit'
        ],
    }
];

handleMenuQuestions()

function handleMenuQuestions() {
    inquirer.prompt(menuQuestions)
        .then(answers => {
            switch (answers.userChoice) {
                case 'View All Departments':
                    viewDepartments();
                    break;
                case 'View All Roles':
                    viewRoles();
                    break;
                case 'View All Employees':
                    viewEmployees();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Add A Role':
                    addRole();
                    break;
                case 'Add and Employee':
                    addEmployee();
                    break;
                case 'Update an Employee Role':
                    updateEmployee();
                    break;
                default:
                    process.exit();
            }
        })

}

const viewDepartments = async () => {
    const rows = await info.viewAllDepartments();
    console.table(rows);
    handleMenuQuestions();
}

const viewRoles = async () => {
    const rows = await info.viewAllRoles();
    console.table(rows);
    handleMenuQuestions();
};

const viewEmployees = async () => {
    const rows = await info.viewAllEmployees();
    console.table(rows);
    handleMenuQuestions();
}


const addDepartment = async () => {
    inquirer.prompt([
        {
            message: 'What is the name of the department?',
            type: 'input',
            name: 'departmentName',
        },
    ])
    .then(async (answers) => {
        const message = await info.addDepartment(answers.departmentName);
        console.log(message);
        const newRows = await info.viewAllDepartments();
        console.table(newRows);
        handleMenuQuestions();
    })
}