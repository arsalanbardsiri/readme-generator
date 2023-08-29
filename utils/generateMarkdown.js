// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "None") return "";
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === "None") return "";
  // This can be expanded based on the various licenses
  switch (license) {
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "ISC":
      return "(https://opensource.org/licenses/ISC)";
    case "Apache 2.0":
      return "(https://opensource.org/license/apache-2-0)";
    case "GNU GPLv3":
      return "(https://opensource.org/license/lgpl-3-0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "None") return "";
  return `## License\nThis project is licensed under the ${license} license. See more details [here]${renderLicenseLink(
    license
  )}.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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
For questions, you can reach out to me at [${data.github}](https://github.com/${
    data.github
  }) or contact me at ${data.email}.

`;
}

module.exports = generateMarkdown;
