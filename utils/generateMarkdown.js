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

## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing || 'No contributing guidelines provided.'}

## Tests
${data.tests || 'No test instructions provided.'}

## Questions
For additional questions, contact ${data.email || 'N/A'}.
GitHub: [${data.username || 'N/A'}](https://github.com/${data.username || 'N/A'})
  `;
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
