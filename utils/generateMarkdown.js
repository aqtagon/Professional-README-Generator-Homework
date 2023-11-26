// TODO: Create a function that returns a license badge based on which license is passed in

function generateMarkdown(data) {
  return `
  # ${data.title}

## Description
${data.description || 'No description provided.'}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Instalation
${data.installation || 'No installation instructions provided.'}

## Usage
${data.usage || 'No usage information provided.'}

  `;
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
