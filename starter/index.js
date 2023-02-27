const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your Github username??',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?', 
        name: 'email',
      },
      {
        type: 'input',
        message: "What is your project's name??",
        name: 'title'
      },
      {
        type: 'input',
        message: "Please, write  short descrition of your project",
        name: 'description',
      },
      {
        type: 'list',
        message: "What kind of license?",
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'None'],
      },
      {
        type: 'input',
        message: "What command should be used to install dependencies?",
        name: 'installation',
        default: "npm i ",
      },
      {
        type: 'input',
        message: "What command should be used to run test?",
        name: 'test',
        default: "npm test"
      },
      {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: 'usage',
      },
      {
        type: 'input',
        message: "What does the user need to know about contributing to the repo?",
        name: 'contributing',
      }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(`Generating README file...`);
        writeToFile("README.md", generateMarkdown({...response}));
    })
}

// function call to initialize program
init();
