const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your Github username??',
        name: 'GitHub',
      },
      {
        type: 'input',
        message: 'What is your email address?', 
        name: 'Email',
      },
      {
        type: 'input',
        message: "What is your project's name??",
        name: 'Title'
      },
      {
        type: 'input',
        message: "Please, write  short descrition of your project",
        name: 'Description',
      },
      {
        type: 'list',
        message: "What kind of license?",
        name: 'License',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'None'],
      },
      {
        type: 'input',
        message: "What command should be used to install dependencies?",
        name: 'Installation',
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
        name: 'Usage',
      },
      {
        type: 'input',
        message: "What does the user need to know about contributing to the repo?",
        name: 'Contributing',
      }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
