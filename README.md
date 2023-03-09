# EmployeeTrackerSQL

## Description
This is an app that allows non-developers to easily view and interact with employee information stored in an SQL database. It uses the command-line interface to allow the user to interact with their employee database. This helps a non-developer / the user easily keep track of an manage sensitive employee information.

## Installation

To use this application the user will have to copy this code into their own directory on their computer.

Once copied they will need to change into the correct directory with the copy of this code and run npm install & npm i inquirer@8.2.4 in the command line interface in order to get the required dependencies.

## Usage

Demonstration video: 

To use this application the user will have to change into the directory with the source code. Then run node index.js, if successfull they will be prompted to choose an action based on a list of potential actions. To execute the desired action they will simply have to follow the prompts. For example if the user would like to add an employee they would select the 'Add an Employee' option and then enter the specific input required from the prompts. Once finished the employee will be added to the database and the new database will be displayed back to the user to show the updated information.

## Credits

Starter Code provide by the University of Arizona FullStack Development Bootcamp.

## License

MIT License

Copyright (c) [2023] [EvanTowlerton]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features
These include:
    -View All Departments
    -View All Roles
    -View All Employees
    -View All Managers
    -Add Department
    -Add a Role
    -Add an Employee
    -Update an Employee role

## How to Contribute
Features that are looking to be implemented in the future include:
    -Update Employee Managers
    -View Employees by Department
    -Delete departments / roles / employees
    -View the total utilized budger
    (AKA the combined salaries of all employees in a specific department)

## Tests

Possibly need to test different types of input into inquirer prompts to check if any
unforeseen characters or character lengths would affect the database / injection into the database.