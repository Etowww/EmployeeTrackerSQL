INSERT INTO department (name)
VALUES ("Sales"), -- 1
("Engineering"), -- 2
("Finance"), -- 3
("Legal"); -- 4


INSERT INTO roles (role_title, role_salary, role_dept_id)
VALUES ("Sales Lead", 100000, 1), 
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2), 
("Software Engineer", 120000, 2),
("Accounting Manager", 160000, 3),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, employee_role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),
("Mike", "Chan", 2, 1),
("Ashley", "Rodriguez", 3, NULL),
("Kevin", "Tupik", 4, 3),
("Kumal", "Singh", 5, NULL),
("Malia", "Brown", 6, 5),
("Sarah", "Lourd", 7, NULL),
("Tom", "Allen", 8, 7);