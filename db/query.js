const connection = require('./connection');

class Information {

    constructor (connection) {
        this.connection = connection;
    };

    async viewAllDepartments() {
        const query = await connection();
        const [rows, fields] = await query.execute('SELECT * FROM department');
        return rows;
    };


    async viewAllRoles () {
        const query = await connection();
        const [rows, fields] = await query.execute('SELECT * FROM roles');
        return rows;
    }

    async viewAllEmployees () {
        const query = await connection();
        const [rows, fields] = await query.execute(`
            SELECT
                employee.employee_id,
                employee.first_name,
                employee.last_name,
                roles.role_title AS role,
                department.name AS department,
                roles.role_salary,
                CONCAT(manager.first_name, ' ', manager.last_name) AS manager
            FROM
                employee
                LEFT JOIN roles ON employee.employee_role_id = roles.role_id
                LEFT JOIN department ON roles.role_dept_id = department.dept_id
                LEFT JOIN employee manager ON employee.manager_id = manager.employee_id;
        `);
        return rows;
    };

    async addDepartment(departmentName) {
        const query = await connection();
        const [rows, fields] = await query.execute('INSERT INTO department (name) VALUES (?)', [departmentName]);
        if (rows.affectedRows === 1) {
            return 'Department added successfully! The newly updated database is shown below';
        } else {
            return 'Error adding department.';
        }
    }


}

module.exports = Information;