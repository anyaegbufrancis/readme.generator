//Declaring Global constants for packages and local validators

const { strikethrough } = require("colors");

const emailValidate = require("email-validator");

const githubValidate = require("gh-account-exists");

//Define interactive data validation checks

const validateInput = input => input === "" ? "This input is required" : true;

const description = input => ((input.split('').length) < 50) ? "Please input project description upto 50 characters or more..." : true;

const emailChecker = email => emailValidate.validate(email) ? true : "Please enter a valid email address...";

const githubAccountValidate = github => githubValidate(github).then(exists => {
                                                                               if (exists === false) {
                                                                                   console.log("\nTry a valid github username\n".red)
                                                                                   } else {
                                                                                       console.log("\nValid Github Username!\n".green)
                                                                                       
                                                                                       return exists
                                                                                       }
                                                                                    //console.log(exists)
                                                                               });


//Exporting Modules for use in other files

module.exports = {validateInput, description, emailChecker, githubAccountValidate}
