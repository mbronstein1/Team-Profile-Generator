const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

// let matt = new Manager("Matt", 12, "matt@gmail.com", 210)

// console.log(matt)

// console.log(matt.getRole())