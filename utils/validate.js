//Declaring Global constants for packages and local validators

const { strikethrough } = require("colors");

const emailValidate = require("email-validator");

const githubValidate = require("gh-account-exists");

//Define interactive data validation checks
const validateInput = input => input === "" ? "This input is required" : true;
const description = input => ((input.split('').length) < 50) ? "Please input project description upto 50 characters or more..." : true;


                                                                               });


//Exporting Modules for use in other files

module.exports = {}

