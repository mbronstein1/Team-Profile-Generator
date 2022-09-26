const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
var allEmployees = []; // once an employee has been fully answered push a new instance of it to this array i.e. [new Manager(1, john, etc), new Intern(etc), new Engineer(), new Engineer(), new intern()]

const init = () => { //execute initialization w/ prompt asking for job title (validation that the user is the manager)
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
                managerInquirer() //if manager, execute manager prompts
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
                            process.exit();
                        } else {
                            managerInquirer() //if manager, execute manager prompts
                        }
                    })
            }
        })
}

const managerInquirer = () => { //execute questions for Manager
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

const engineerInquirer = () => { //execute questions for Engineer
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

const internInquirer = () => { //execute questions for Intern
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

const managerInfo = (ans) => { //Create new object from Manager class
    let { name, id, email, officeNumber } = ans;
    let manager = new Manager(name, +id, email, +officeNumber); //Added + in front of variables that I want to be numbers because they are always stored originally as a string (same as parseInt())
    allEmployees.push(manager); //WILL EVENTUALLY CALL readyToRender() FUNCTION BELOW WITH renderCard() METHOD
}

const engineerInfo = (ans) => { //Create new object from Engineer class
    let { name, id, email, github } = ans;
    let engineer = new Engineer(name, +id, email, `https://www.github.com/${github}`);
    allEmployees.push(engineer); //WILL EVENTUALLY CALL readyToRender() FUNCTION BELOW WITH renderCard() METHOD
}

const internInfo = (ans) => { //Create new object from Intern class
    let { name, id, email, school } = ans;
    let intern = new Intern(name, +id, email, school);
    allEmployees.push(intern); //WILL EVENTUALLY CALL readyToRender() FUNCTION BELOW WITH renderCard() METHOD
}

const addEmployeeInquirer = () => { //execute question asking whether user would like to add an employee. If yes, execute corresponding prompt function. If no, execute readyToRender() inside the index.html (which is being dynamically created)
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
                    fs.writeFile("./dist/index.html", readyToRender(), ((err) => err ? console.error(err) : console.log("File is complete!")));
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

const readyToRender = () => { //loop through each "employee" item in allEmployees array, and for each one add the appropriate html section based on the corresponding .renderCard() method
    let html = "";
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