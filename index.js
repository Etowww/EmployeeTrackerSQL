// Import and Require NPM Packages
const inquirer = require('inquirer');
const db = require('./db/query')

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
                    viewAllDepartments();
                    break;
                // case 'View All Departments':

                // break;
                // case 'View All Departments':

                // break;
                // case 'View All Departments':

                // break;
                // case 'View All Departments':

                // break;
                // case 'View All Departments':

                // break;
                // case 'View All Departments':

                // break;
                default:
                    process.exit();
            }
        })

}

function viewAllDepartments() {
    db.viewDepartments().then((data) => {
        console.table(data)
        handleMenuQuestions()
    })
   
}

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