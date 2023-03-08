const connection = require('./connection');

class Information {

    constructor (connection) {
        this.connection = connection;
    };

    async viewAllDepartments() {
        const query = 'SELECT * FROM department';
        const [rows] = await this.connection.promise().query(query);
        return rows.map(({dept_id, name}) => ({id: dept_id, name}));
    };


    viewAllRoles () {
        const query = 'SELECT * FROM roles';
        return this.connection.query(query);
    }

    viewAllEmployees () {
        const query = `SELECT employee.id AS 'Employee ID',
        Employee.first_name AS 'First Name',
        Employee.last_name AS 'Last Name',
        role.title AS 'Title',
        department.name AS 'Department',
        role.salary AS 'Salary',
        CONCAT(manager.first_name, ' ', manager.last_name) AS 'Manager'
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id
        `;
        return this.connection.query(query);
    }

    addDepartment(department) {
        const query = 'INSERT INTO department SET ?';
        return this.connection.query(query, role);
    }

    addRole(role) {
        const query = 'INSERT INTO roles SET ?';
        return this.connection.query(query, role);
    }

    addEmployee(employee) {
        const query = 'INSERT INTO employee SET ?';
        return this.connection.query(query, role);
    }

    updateEmployeeRole(employeeId, roleID) {
        const query = 'UPDATE employee SET role_id = ? WHERE ID = ?'
        return this.connection.query(query, [roleID, employeeId])
    }
}

module.exports = Information;