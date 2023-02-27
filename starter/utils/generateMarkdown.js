// function to generate markdown for README
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/License--${license}-blue.svg`
  }
  return ""
}

const renderLicenseBadge = (license) => {
  if (license!== "None") {
    return `\n* [License](#license)\n`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description
  ${data.Description}

  ### Table of Contents

  * [Installation](#installation)

  *[Usage](#usage)


`;
}

module.exports = generateMarkdown;
