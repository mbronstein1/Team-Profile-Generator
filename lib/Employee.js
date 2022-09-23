class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    };
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;

// let input1 = "Dan";
// let input2 = 10;
// let input3 = "dan@gmail.com"

// const dan = new Employee(input1, input2, input3);
