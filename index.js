// Packages Required for Application
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-site");
