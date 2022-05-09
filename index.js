// Packages Required for Application
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { writeFile, copyFile } = require("./utils/generate-site");

// Declare Global Variables
const team = [];

// Prompts Manager on their Info
const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your Employee ID? (Required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter your Employee ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your office number? (Required)",
      validate: (officeNumberInput) => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log("Please enter your office number!");
          return false;
        }
      },
    },
  ]);
};

// Prompts Manager with Menu of Options
const promptMenu = () => {
  console.log(`
=================
Add My Team
=================
`);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "Finish Building My Team",
        ],
      },
    ])
    .then((response) => {
      switch (response.menu) {
        case "Add an Engineer":
          promptEngineer();
          break;
        case "Add an Intern":
          promptIntern();
          break;
        default:
          buildSite();
      }
    });
};

// Prompts Questions about Engineer
const promptEngineer = () => {
  console.log(`
==================
Add a New Engineer
==================
`);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the engineer's Employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the engineer's email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username? (Required)",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter the engineer's Github username!");
            return false;
          }
        },
      },
    ])
    .then((engineerData) => {
      const engineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.github
      );
      team.push(engineer);
      promptMenu();
    });
};

// Prompts Questions about Intern
const promptIntern = () => {
  console.log(`
=================
Add a New Intern
=================
`);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the intern's Employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the intern's email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Where does the Intern go to school? (Required)",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the intern's school name!");
            return false;
          }
        },
      },
    ])
    .then((internData) => {
      const intern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
      );
      team.push(intern);
      promptMenu();
    });
};

const buildSite = () => {
  console.log(`
==========================
Finished Building My Team
==========================
`);

  const pageHTML = generatePage(team);
  writeFile(pageHTML);
  copyFile();

  console.log("Your site is ready!");
};

promptManager()
  .then((managerData) => {
    const manager = new Manager(
      managerData.name,
      managerData.id,
      managerData.email,
      managerData.officeNumber
    );
    team.push(manager);
  })
  .then(promptMenu);
