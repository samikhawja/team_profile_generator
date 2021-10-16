const inquire = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        message: "How old are you?",
        name: "age",
    }
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