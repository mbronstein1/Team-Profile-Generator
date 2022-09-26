const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
    renderCard() {
        return `
<div class="card mw-40 m-3 shadow">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${this.name}</h2>
        <h3>${this.getRole()}</h3>
    </div>
    <div class="card-body bg-light">
        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID : ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">Office number: ${this.officeNumber}</li>
            </ul>
        </div>
    </div>
</div>`
    }
}

module.exports = Manager