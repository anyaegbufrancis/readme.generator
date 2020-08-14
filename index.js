//Global declarations
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const {description, emailChecker, validateInput, githubAccountValidate} = require("./utils/validate");
const colors = require('colors');
const { error } = require("console");
const util = require("util")
    
// Array of questions for user
const questions = [
    {
        type: "input".green,
        message: "Enter the title of this project: ".magenta,
        name: "title",  
    },
    {
        type: "input".green,
        message: "Please Enter a detailed description of the project (50 words minimum): ".magenta,
        name: "description",
        
    },
    {
        type: "input".green,
        message: "Please enter the installation instructions: ".magenta,
        name: "installation",
        default: "Clone the code to your github repository and use 'npm install' command in the terminal to install dependencies. Run the program using: 'node index.js'"
    },
    {
        type: "input".green,
        message: "Please enter the usage direction: ".magenta,
        name: "usage",
     
    },
    {
        type: "list",
        message: "Please select applicable license: ".magenta,
        name: "license",
        choices: [
            "MIT",
            "ISC", 
            "GNU",
            "Apache",
            "BSD"
        ]
    },
    {
        type: "input".green,
        message: "Please input the authors: ".magenta,
        name: "authors",       
    },
    {
        type: "input".green,
        message: "Please enter how we can test this: ".magenta,
        name: "tests",
    },
    {
        type: "input".green,
        message: "Please enter your Github name: ".magenta,
        name: "github",
    },
    {
        type: "input".green,
        message: "Please enter your Email Address: ".magenta,
        name: "email",
    },    
    
];