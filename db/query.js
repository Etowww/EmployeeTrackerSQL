const connection = require('./connection');

class Information {

    constructor (connection) {
        this.connection = connection;
    };


///// Viewing Queries /////////

    async viewAllDepartments() {
        const query = await connection();
        const [rows, fields] = await query.execute('SELECT * FROM department');
        return rows;
    };


    async viewAllRoles () {
        const query = await connection();
        const [rows, fields] = await query.execute(`
            SELECT
                roles.role_id, roles.role_title, roles.role_salary, department.name AS department
            FROM
                roles
                INNER JOIN department ON roles.role_dept_id = department.dept_id   
        `);
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


    async viewAllManagers () {
        const query = await connection();
        const [rows, fields] = await query.execute(`
            SELECT employee_id, first_name, last_name
            FROM employee
            WHERE manager_id IS NULL;
        `);
        return rows;
    }

/////// Adding Queries /////////////////
    async addDepartment(departmentName) {
        const query = await connection();
        const [rows, fields] = await query.execute('INSERT INTO department (name) VALUES (?)', [departmentName]);
        if (rows.affectedRows === 1) {
            return 'Department added successfully! The newly updated database is shown below';
        } else {
            return 'Error adding department.';
        }
    }


    async addRole(roleName, roleSalary, departmentId) {
        const query = await connection();
        const [rows, fields] = await query.execute(
            'INSERT INTO roles (role_title, role_salary, role_dept_id) VALUES (?, ?, ?)',
            [roleName, roleSalary, departmentId]
        );
        if (rows.affectedRows === 1) {
            return 'Role added successfully! The newly updated database is shown below';
        } else {
            return 'Error adding role';
        }
    }

    async addEmployee(firstName, lastName, roleId, managerId) {
        const query = await connection();
        const [rows, fields] = await query.execute(
          'INSERT INTO employee (first_name, last_name, employee_role_id, manager_id) VALUES (?, ?, ?, ?)',
          [firstName, lastName, roleId, managerId]
        );
        if (rows.affectedRows === 1) {
          return 'Employee added successfully! The newly updated database is shown below';
        } else {
          return 'Error adding employee';
        }
    }

///// Updating Queries /////////
    async updateEmployeeRole(employeeId, roleId) {
        const query = await connection();
        const [rows, fields] = await query.execute(`
            UPDATE employee SET employee_role_id = ? WHERE employee_id = ?`,
            [roleId, employeeId]
        );
        if (rows.affectedRows === 1) {
            return 'Employee Role successfully updated. The new employee database is shown below';
        } else {
            return 'Error upating employee';
        }
    }

}

module.exports = Information;