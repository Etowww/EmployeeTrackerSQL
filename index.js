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

async function viewDepartments() {
    const departments = await info.viewAllDepartments();
    console.table(departments, ['id', 'name']);
    handleMenuQuestions();
};



function addEmployee(){
    inquirer.prompt([

        {
            message: 'What is the engineers name?',
            type: 'input',
            name: 'first_name',
        },
        {
            message: 'What is the engineers ID?',
            type: 'input',
            name: 'last_name',
        },
        {
            message: 'What is the engineers Email Address?',
            type: 'input',
            name: 'role_id',
        },
        {
            message: 'What is the engineers Github Account?',
            type: 'input',
            name: 'manager_id',
        }
    ])
    .then(answers => {
       db.insertEmployee(answers.first_name, answers.last_name, )
    })
}