const connection = require('./connection');

class Information {

    constructor (connection) {
        this.connection = connection;
    };


    viewDepartments () {
        return this.connection.promise().query()
    }

    insertEmployee(a, b, c, d){
        return this.connection.promise().query(`INSERT INTO employee (first_name, last_name, ) VALUES ( ${a}, "Linear equations, inequalities, functions, and graphs", true)`) 
    }
}

module.exports = new Information(connection)