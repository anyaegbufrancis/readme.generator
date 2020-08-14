//Global declarations
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const {description, emailChecker} = require("./utils/validate");
const colors = require('colors');
const { error } = require("console");
const util = require("util")