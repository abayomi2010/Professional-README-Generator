// function to generate markdown for README
function renderLicenseBadge(license) {
  if (license !== "None") {
    return "![Github License](https://img.shields.io/badge/License--${license}-blue.svg";
  }
  return ""
}

const renderLicenseLink = (license) => {
  if (license!== "None") {
    return `\n* [License](#license)\n`
  }
  return ""
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description
  ${data.description}

  ### Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * ${renderLicenseLink(data.license)}

  * [Contributing](#contributing)

  ## Installation

  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

  
  
  ## Usage
  ${data.usage}

  
  
  ## License
  This project is licensed under the ${data.license} license.

  
  
  ## Contributing

  ${data.contributing}

  
  
  ## Tests

  To run tests, run the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  
  
  ### Questions
  Open an issue if you have any questions about the repo, or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}) 
`;
}

module.exports = generateMarkdown;
