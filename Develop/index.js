const inquire = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        message: "What is your company/team name?",
        name: "company",
    },
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "list",
        message: "What position do you hold?",
        name: "position",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        message: "What is your ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
]

function writeToFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data)
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile("index.html", generateMarkdown(response));
    });
}

init();