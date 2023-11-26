// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project',
    },
];

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
