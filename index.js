// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title? (Required)",
        validate: (projectTitle) => {
          if (projectTitle) {
            return true;
          } else {
            console.log("Please enter your project title!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project (Required)",
        validate: (projectDescription) => {
          if (projectDescription) {
            return true;
          } else {
            console.log("Please enter your project description!");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "languages",
        message: "What did you build this project with? (Check all that apply)",
        choices: [
          "Javascript",
          "HTML",
          "CSS",
          "ES6",
          "jQuery",
          "Bootstrap",
          "Node.js",
        ],
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have? (Required)",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        validate: (projectLicense) => {
          if (projectLicense) {
            return true;
          } else {
            console.log("Please choose your project license type!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm install",
      },
      {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test",
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
      },
      {
          type: "input",
          name: "website",
          message: "Please enter your project website (Required)",
          validate: (projectWebsite) => {
            if (projectWebsite) {
              return true;
            } else {
              console.log("Please enter your project website!");
              return false;
            }
          },
        },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username (Required)",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What's your email address? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "contributing",
        message: "Please enter contributor name(s):",
        validate: (contributorName) => {
          if (contributorName) {
            return true;
          } else {
            console.log("Please enter contributor(s) name!");
            return false;
          }
        },
      },
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
}

// TODO: Create a function to initialize app
async function init() {
   try {
     const answers = await inquirer.prompt(questions);
     const markdownContent = generateMarkdown(answers);
     writeToFile('README.md', markdownContent);
    } catch (error) {
      console.error('Error initializing the app:', error);  
    }
}

// Function call to initialize app
init();
