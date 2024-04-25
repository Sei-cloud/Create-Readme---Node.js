// Function to generate a license badge based on the license type
function renderLicenseBadge(license) {
  if (!license) {
      return '';
  }
  return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
}

// Function to return the license link
function renderLicenseLink(license) {
  if (!license) {
      return '';
  }
  return `(https://opensource.org/licenses/${license})`;
}

// Function to generate the license section of README
function renderLicenseSection(license) {
  if (!license) {
      return '';
  }
  return `## License

This project is licensed under the [${license} License]${renderLicenseLink(license)}.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const videoURL = 'https://vimeo.com/939174876?share=copy';
  let markdown = `# ${data.title}\n\n`;
  markdown += `## Usage\n\n`;
  markdown += `Watch the video tutorial [here](${videoURL}).\n\n`;
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions about the project, please feel free to contact [${data.username}](https://github.com/${data.username}).

`;
}

module.exports = generateMarkdown;
