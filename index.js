const inquire = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHTML = require('./lib/generateHTML');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');
const members = [];

const questions = [
    {
        type: "list",
        message: "What position do you hold? Or are you done?",
        name: "position",
        choices: ["Engineer", "Intern", "Done"],
        when: () => members.length !== 0
    },
    {
        type: "input",
        message: "What is your name?",
        name: "name",
        when: () => members.length === 0
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "office",
        when: () => members.length === 0
    },
    {
        type: "input",
        message: "What is your Engineer's name?",
        name: "name",
        when: (answer) => answer.position === "Engineer"
    },
    {
        type: "input",
        message: "What is your Engineer's GitHub username?",
        name: "github",
        when: (answer) => answer.position === "Engineer"
    },
    {
        type: "input",
        message: "What is your Intern's name?",
        name: "name",
        when: (answer) => answer.position === "Intern"
    },
    {
        type: "input",
        message: "What school did your Intern go to?",
        name: "school",
        when: (answer) => answer.position === "Intern"
    },
    {
        type: "input",
        message: "What's the employee ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What's the employee email?",
        name: "email",
    },
] 

function writeToFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data)
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        if(response.position !== "Done"){
            if(member.length === 0){
                const employ = new Manager(response.name, response.id, response.email, response.office);
                members.push(employ);
            } else if(response.position === "Engineer"){
                const employ = new Engineer(response.name, response.id, response.email, response.github);
                members.push(employ);
            } else(response.position === "Intern");{
                const employ = new Intern(response.name, response.id, response.email, response.school);
                members.push(employ);
            } init();
        } else{writeToFile("index.html", generateHTML(response));
                console.log("Generated index.HTML file")}
    });
}

init();