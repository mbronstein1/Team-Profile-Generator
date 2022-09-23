const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

// const ellen = new Intern("Ellen", 121, "ellen@gmail.com", "NU")

// console.log(ellen, ellen.getRole(), ellen.getSchool())