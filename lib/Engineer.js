const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer

// let mike = new Engineer("Mike", 20, "mike@gmail.com", "mike1")

// console.log(mike, mike.getRole())