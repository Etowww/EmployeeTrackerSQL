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
            'View All Managers',
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
                case 'View All Managers':
                    viewManagers();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Add A Role':
                    addRole();
                    break;
                case 'Add An Employee':
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

const viewManagers = async () => {
    const rows = await info.viewAllManagers();
    console.table(rows);
    handleMenuQuestions();
}




const addDepartment = async () => {
    inquirer.prompt([
        {
            message: 'What is the name of the department you would like to add?',
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

const addRole = async () => {
    const departments = await info.viewAllDepartments();

    const departmentChoices = departments.map((department) => {
        return {
            name: department.name,
            value: department.dept_id,
        };
    });

    inquirer.prompt([
        {
            message: 'What is the name of the role you would like to add?',
            type: 'input',
            name: 'roleName',
        },
        {
            message: 'What is the salary of this role?',
            type: 'input',
            name: 'roleSalary',
        },
        {
            message: 'What is the department that role is apart of?',
            type: 'list',
            name: 'departmentId',
            choices: departmentChoices,
        },
    ])
    .then(async (answers) => {
        const message = await info.addRole(
            answers.roleName,
            answers.roleSalary,
            answers.departmentId
        );
        console.log(message);
        const newRows = await info.viewAllRoles();
        console.table(newRows);
        handleMenuQuestions();
    })
}

const addEmployee = async () => {
    const roles = await info.viewAllRoles();
    const managers = await info.viewAllManagers();

    const managerChoices = managers.map((manager) => {
        return {
            name: `${manager.first_name} ${manager.last_name}`,
            value: manager.employee_id
        };
    });

    const roleChoices = roles.map((role) => {
        return {
            name: role.role_title,
            value: role.role_id
        };
    });

    inquirer.prompt([
        {
            message: 'What is the new employees first name?',
            type: 'input',
            name: 'firstName',
        },
        {
            message: 'What is the new employees last name?',
            type: 'input',
            name: 'lastName',
        },
        {
            message: 'What is the new employees role?',
            type: 'list',
            name: 'roleId',
            choices: roleChoices
        },
        {
            message: 'Who is the new employees manager?',
            type: 'list',
            name: 'managerId',
            choices: managerChoices
        }
    ])
    .then(async (answers) => {
        const message = await info.addEmployee(
            answers.firstName,
            answers.lastName,
            answers.roleId,
            answers.managerId
        );
        console.log(message);
        const newRows = await info.viewAllEmployees();
        console.table(newRows);
        handleMenuQuestions();
    })
}

const updateEmployee = async () => {
    const employees = await info.viewAllEmployees();
    const employeeChoices = employees.map((employee) => {
        return {
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.employee_id
        };
    });

    const roles = await info.viewAllRoles();
    const roleChoices = roles.map((role) => {
        return {
            name: role.role_title,
            value: role.role_id
        };
    });

    inquirer.prompt([
        {
            message: 'Please select the employee who is changing roles',
            type: 'list',
            name: 'employeeId',
            choices: employeeChoices
        },
        {
            message: 'Please select the new role for the employee',
            type: 'list',
            name: 'roleId',
            choices: roleChoices
        }
    ])
    .then(async (answers) => {
        const message = await info.updateEmployeeRole(
            answers.employeeId,
            answers.roleId,
        );
        console.log(message);
        const newRows = await info.viewAllEmployees();
        console.table(newRows);
        handleMenuQuestions();
    })
}