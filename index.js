const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const employees = [];

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
                console.log("\x1b[33m Sorry for the confusion. Have a good day!");
                return;
            } else if (ans.title === "Manager") {
                managerInquirer()
            } else {
                inquirer
                    .prompt([
                        {
                            type: "list",
                            message: ("\x1b[31m --You need a manager to access this file--"),
                            name: "validateManager",
                            choices: ["I am a manager", "I will get a manager and try again"],
                        }
                    ])
                    .then((ans) => {
                        if (ans.validateManager === "I will get a manager and try again") {
                            console.log("\x1b[33m See you later")
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
                message: "What is your email?",
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
            // console.log(employees)
            addEmployeeInquirer();
        })
}

const engineerInquirer = () => {
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
                message: "What is your email?",
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
                message: "What is your GitHub profile name?",
                name: "github",
            },
        ])
        .then((ans) => {
            engineerInfo(ans);
            // console.log(employees)
            addEmployeeInquirer();
        })
}

const internInquirer = () => {
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
                message: "What is your email?",
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
                message: "What school do you go to?",
                name: "school",
            },
        ])
        .then((ans) => {
            internInfo(ans);
            // console.log(employees)
            addEmployeeInquirer();
        })
}

const managerInfo = (ans) => {
    let { name, id, email, officeNumber } = ans;
    let manager = new Manager(name, +id, email, +officeNumber);
    employees.push(manager);
}

const engineerInfo = (ans) => {
    let { name, id, email, github } = ans;
    let engineer = new Engineer(name, +id, email, `https://www.github.com/${github}`);
    employees.push(engineer);
}

const internInfo = (ans) => {
    let { name, id, email, school } = ans;
    let intern = new Intern(name, +id, email, school);
    employees.push(intern)
}

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
                fs.writeFile("index.html", renderEmployees, ((err) => {
                    err ? console.error(err) : console.log("File successfully written!")
                }));
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


init()