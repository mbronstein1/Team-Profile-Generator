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
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>My Team Profile</title>
</head>

<body class = "vh-100">
    <div class="jumbotron jumbotron-fluid bg-danger">
        <div class="container d-flex justify-content-center">
            <h1 class="display-3 text-white p-4">My Team</h1>
        </div>
    </div>
    <div class="row mx-5">
        <div class="col d-flex justify-content-center">
            <div class="card m-3 shadow" style="width: 18rem">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${this.name}</h2>
                    <h3><i class="fa-solid fa-mug-hot"></i>${this.getRole()}</h3>
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
            </div>
        </div>
`
    }
}

module.exports = Manager