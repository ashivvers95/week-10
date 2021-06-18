// const Intern = require('../lib/Intern');
// const Engineer = require('../lib/Engineer');
// const Manager = require('../lib/Manager');

class Employee {
    constructor(id, name, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    getId()  {
        return this.id;
    };

    getName()  {
       return this.name; 
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Employee;