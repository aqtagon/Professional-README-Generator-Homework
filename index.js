const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

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
        name: "tests",
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

const writeToFile = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile("generatedREADME.md", data, err => {
      if (err) {
        reject(err);
       
        return;
      }
      
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};


async function init() {
    try {
      const answers = await inquirer.prompt(questions);
      const markdownContent = generateMarkdown(answers);
      await writeToFile(markdownContent); 
      console.log('README.md has been successfully generated!');
     } catch (error) {
       console.error('Error initializing the app:', error);  
     }
 }


init();
