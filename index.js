//Global declarations
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const { resolve } = require("path");
const readmeCreate = util.promisify(fs.writeFile);

// rray of questions for user
const questions = [
    {
        type: "input",
        message: "Enter the title of this project(README.md title)",
        name: "title"
    },
    {
        type: "input",
        message: "Please Enter a detailed description of the project: ",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter the installation instructions",
        name: "installation"
    },
    {
        type: "input",
        message: "Please enter the usage instruction",
        name: "usage"
    },
    {
        type: "list",
        message: "Please select applicable license",
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
        type: "input",
        message: "Please enter names of contributing",
        name: "contributing"
    },
    {
        type: "input",
        message: "Please enter your email address",
        name: "email"
    },
    {
        type: "input",
        message: "If you want to run a test, please indicate here",
        name: "tests"
    },
    {
        type: "input",
        message: "Please enter your github repo",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your email address",
        name: "email"
    }    

];

//function to write README file
function writeToFile(fileName, data) {
    readmeCreate("README.md", data).then(function() {
        console.log("Successfully wrote to README.md file");
      })
  
}

function delayWrite () {
    setTimeout(function() {
        console.log("Interactive README.md Generator Loading...");
    }, 3000)   
    }
            
           // delayWrite()
// function to initialize program
async function init() {  
    //const promptUser =  inquirer.prompt(questions)
    try {
        delayWrite = await delayWrite()
        //const data = await promptUser;
        const data = await (inquirer.prompt(questions));
        const readmefile = generateMarkdown(data);
        await writeToFile("README.md", readmefile);  
        console.log("Success!")      
    }
    catch (err) {
        console.log(err);
      }    
    }

// function call to initialize program
//setTimeout (init(), 1000);
init()