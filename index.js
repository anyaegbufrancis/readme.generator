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
        validate: validateInput  
    },
    {
        type: "input".green,
        message: "Please Enter a detailed description of the project (50 words minimum): ".magenta,
        name: "description",
        validate: description
        
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
        validate: validateInput
     
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
        validate: validateInput     
    },
    {
        type: "input".green,
        message: "Please enter how we can test this: ".magenta,
        name: "tests",
        validate: validateInput
    },
    {
        type: "input".green,
        message: "Please enter your Github name: ".magenta,
        name: "github",
        validate: githubAccountValidate
    },
    {
        type: "input".green,
        message: "Please enter your Email Address: ".magenta,
        name: "email",
       validate: emailChecker
    },    
    
];

//function to write README file
function writeToFile(README, generateFile) {
    fs.writeFile("./output/"+README, generateFile, function (err) {
        if (err) {
            console.log("\nA CRITICAL ERROR OCCURED. CANNOT CREATE README.md FILE...\n".red);
        } else      
        console.log("\nREADME.md FILE SUCCESSFULLY WRITTEN!\n".green)
    });
}

//Clears console and displays initialization message
function Initializing () {   
    console.clear()
    console.log("Loading Interactive README.md Generator ...".green);
    }

//function to initialize program
Initializing()

async function init() {
    //A few seconds delay purely for no functional reason
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    try {
        const response =  await inquirer.prompt(questions) ;
        const README = "README.md";
        //Displays selected data    
        console.log("\n")  
        Object.entries(response).forEach(([key, value]) => (console.log(`For ${key}, you entered:  ${value.green}`)));
        //Call the markdown file
        const generateFile = await generateMarkdown(response);
        //Write content of markdown file to README.md in this directory
        await  writeToFile(README, generateFile);    
        
    } catch (err) {
        ;
      }    
    }
