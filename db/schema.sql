DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    dept_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE roles (
    role_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    role_title VARCHAR(30),
    role_salary DECIMAL,
    role_dept_id INT,
    FOREIGN KEY (role_dept_id) REFERENCES department(dept_id)
);

CREATE TABLE employee (
    employee_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    employee_role_id INT,
    FOREIGN KEY (employee_role_id) REFERENCES roles(role_id),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(employee_id)
);