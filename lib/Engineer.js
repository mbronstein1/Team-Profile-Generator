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
                <li class="list-group-item">GitHub: <a href="https://www.github.com/${this.github}" target="_blank">${this.github}</a></li>
            </ul>
        </div>
    </div>
</div>`
    }
}

module.exports = Engineer