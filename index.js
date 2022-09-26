const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
// const renderHtml = require("./src/html_template");
// const employees = [];

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
const init = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Please provide your job title:",
                name: "title",
                choices: ["Manager", "Engineer", "Intern", "I do not work here"],
            }
        ])
        .then((ans) => {
            console.log(ans)
            if (ans.title === "I do not work here") {
                console.log("\x1b[33m Sorry for the confusion. Have a nice day!");//notification in yellow
                process.exit(); //same as commmand+c, exits process
                // return;
            } else if (ans.title === "Manager") {
                managerInquirer()
            } else {
                inquirer
                    .prompt([
                        {
                            type: "list",
                            message: ("\x1b[31m --You need a manager to access this file--"),//notification in red
                            name: "validateManager",
                            choices: ["I am a manager", "I will get a manager and try again"],
                        }
                    ])
                    .then((ans) => {
                        if (ans.validateManager === "I will get a manager and try again") {
                            console.log("\x1b[33m See you later")//notification in yellow
                            return;
                        } else {
                            managerInquirer()
                        }
                    })
            }
        })
}

const managerInquirer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
                validate: (input) => input ? true : console.log("\x1b[31m Please enter your name")
            },
            {
                type: "input",
                message: "What is your ID?",
                name: "id",
                validate: (input) => {
                    if (!isNaN(input)) {
                        input = input;
                        return true
                    } else {
                        console.log("\x1b[31m Input must be a number");
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email",
                validate: (input) => {
                    if (input.includes(".", "@")) {
                        return true
                    } else {
                        console.log("\x1b[31m Input must be a valid email address");
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNumber",
                validate: (input) => {
                    if (!isNaN(input)) {
                        return true
                    } else {
                        console.log("\x1b[31m Input must be a number");
                        return false
                    }
                }
            },
        ])
        .then((ans) => {
            managerInfo(ans);
            addEmployeeInquirer();
        })
}

const engineerInquirer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your engineer's name?",
                name: "name",
                validate: (input) => input ? true : console.log("\x1b[31m Please enter a name")
            },
            {
                type: "input",
                message: "What is your engineer's ID number?",
                name: "id",
                validate: (input) => {
                    if (!isNaN(input)) {
                        input = input;
                        return true
                    } else {
                        console.log("\x1b[31m Input must be a number");
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "What is your engineer's email address?",
                name: "email",
                validate: (input) => {
                    if (input.includes(".", "@")) {
                        return true
                    } else {
                        console.log("\x1b[31m Input must be a valid email address");
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "What is your engineer's GitHub profile name?",
                name: "github",
            },
        ])
        .then((ans) => {
            engineerInfo(ans);
            addEmployeeInquirer();
        })
}

const internInquirer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your intern's name?",
                name: "name",
                validate: (input) => input ? true : console.log("\x1b[31m Please enter your name")
            },
            {
                type: "input",
                message: "What is your intern's ID number?",
                name: "id",
                validate: (input) => {
                    if (!isNaN(input)) {
                        input = input;
                        return true
                    } else {
                        console.log("\x1b[31m Input must be a number");
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "What is your intern's email address?",
                name: "email",
                validate: (input) => {
                    if (input.includes(".", "@")) {
                        return true
                    } else {
                        console.log("\x1b[31m Input must be a valid email address");
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "What school did/does your intern attend?",
                name: "school",
            },
        ])
        .then((ans) => {
            internInfo(ans);
            addEmployeeInquirer();
        })
}

const managerInfo = (ans) => {
    let { name, id, email, officeNumber } = ans;
    let manager = new Manager(name, +id, email, +officeNumber);
    allEmployees.push(manager); //WILL EVENTUALLY CALL readyToRender() FUNCTION BELOW WITH renderCard() METHOD
}

// const managerInfo = (ans) => {
//     let { name, id, email, officeNumber } = ans;
//     let manager = new Manager(name, +id, email, +officeNumber);
//     fs.writeFile("./dist/index.html", `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
//         <title>My Team Profile</title>
//         </head>
//     <body class = "vh-100">
//     <div class="jumbotron jumbotron-fluid bg-danger">
//             <div class="container d-flex justify-content-center">
//             <h1 class="display-3 text-white p-4">My Team</h1>
//             </div>
//           </div>
//           <div class="card-deck m-5 d-flex justify-content-center"> //MOVED TO MANAGER CLASS IN MANAGER.JS TO BE CALLED BY renderCard() METHOD IN readyToRender() FUNCTION BELOW
//           <div class="card mw-40 m-3 shadow">
//     <div class="card-header bg-primary text-white">
//     <h2 class="card-title">${name}</h2>
//     <h3>${manager.getRole()}</h3>
//     </div>
//     <div class="card-body bg-light">
//     <div class="card">
//             <ul class="list-group list-group-flush">
//             <li class="list-group-item">ID : ${id}</li>
//             <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
//               <li class="list-group-item">Office number: ${officeNumber}</li>
//               </ul>
//               </div>
//     </div>
//     </div>
//     `,
//         ((err) => {
//             if (err) {
//                 console.error(err)
//             }
//         }))
//     employees.push(manager);
// }

const engineerInfo = (ans) => {
    let { name, id, email, github } = ans;
    let engineer = new Engineer(name, +id, email, `https://www.github.com/${github}`);
    employees.push(engineer); //WILL EVENTUALLY CALL readyToRender() FUNCTION BELOW WITH renderCard() METHOD
}

// const engineerInfo = (ans) => {
//     let { name, id, email, github } = ans;
//     let engineer = new Engineer(name, +id, email, github);
//     fs.appendFile("./dist/index.html",
//         `
//     <div class="card mw-40 m-3 shadow">
//     <div class="card-header bg-primary text-white">
//     <h2 class="card-title">${name}</h2>
//                   <h3>${engineer.getRole()}</h3>
//                   </div>
//                 <div class="card-body bg-light">
//                 <div class="card">
//                 <ul class="list-group list-group-flush">
//                 <li class="list-group-item">ID : ${id}</li>
//                         <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
//                         <li class="list-group-item">GitHub: <a href="https://www.github.com/${github}" target="_blank">${github}</a></li>
//                         </ul>
//                         </div>
//                         </div>
//               </div>
//               `,
//         ((err) => {
//             if (err) {
//                 console.error(err)
//             }
//         }))
//     employees.push(engineer);
// }

const internInfo = (ans) => {
    let { name, id, email, school } = ans;
    let intern = new Intern(name, +id, email, school);
    allEmployees.push(intern); //WILL EVENTUALLY CALL readyToRender() FUNCTION BELOW WITH renderCard() METHOD
}

// const internInfo = (ans) => {
//     let { name, id, email, school } = ans;
//     let intern = new Intern(name, +id, email, school);
//     // employees.push(intern)
//     fs.appendFile("./dist/index.html",
//         `
//     <div class="card mw-40 m-3 shadow">
//     <div class="card-header bg-primary text-white">
//     <h2 class="card-title">${name}</h2>
//       <h3>${intern.getRole()}</h3>
//       </div>
//       <div class="card-body bg-light">
//         <div class="card">
//         <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID : ${id}</li>
//             <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
//             <li class="list-group-item">School: ${school}</li>
//             </ul>
//           </div>
//           </div>
//           </div>
//     `,
//         ((err) => {
//             if (err) {
//                 console.error(err)
//             }
//         })
//     )
// }


const addEmployeeInquirer = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to add an employee?",
                name: "addEmployee",
                choices: ["Engineer", "Intern", "I'm finished"],
            }
        ]).then((ans) => {
            switch (ans.addEmployee) {
                case "I'm finished":
                    console.log("\x1b[33m Thank you very much");
                    fs.writeFile("./dist/index.html", readyToRender, ((err) => err ? console.error(err) : console.log("File is complete!")));
                    break;
                case "Engineer":
                    engineerInquirer()
                    break;
                case "Intern":
                    internInquirer()
                    break;
            }
        })
}
// once an employee has been fully answered push a new instance of it to this array.
var allEmployees = []; // [new Manager(1, john, etc), new Intern(etc), new Engineer(), new Engineer(), new intern()]

function readyToRender() {
    let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <title>My Team Profile</title>
</head>
    <body class = "vh-100">
        <div class="jumbotron jumbotron-fluid bg-danger">
            <div class="container d-flex justify-content-center">
                <h1 class="display-3 text-white p-4">My Team</h1>
            </div>
        </div>
        <div class="card-deck m-5 d-flex justify-content-center">`
    for (let employee of allEmployees) {
        html += employee.renderCard()
    }
    html += `
    </div>
</body>
</html>`
    return html;
}

init()
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input