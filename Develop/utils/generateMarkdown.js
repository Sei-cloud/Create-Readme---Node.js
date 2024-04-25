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

  let markdown = `# ${data.title}\n\n`;



  // License badge and section
  markdown += `${renderLicenseBadge(data.license)}\n\n`;
  markdown += `## Description\n\n${data.description}\n\n`;
  markdown += `## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)\n\n`;
  markdown += `## Installation\n\n${data.installation}\n\n`;
  markdown += `## Usage\n\n${data.usage}\n\n`;
  markdown += renderLicenseSection(data.license) + '\n\n';
  markdown += `## Contributing\n\n${data.contributing}\n\n`;
  markdown += `## Tests\n\n${data.tests}\n\n`;
  markdown += `## Questions\n\nFor questions about the project, please feel free to contact [${data.username}](https://github.com/${data.username}) or [Email me](mailto:${data.email}).\n\n`;
  return markdown;
}

module.exports = generateMarkdown;
