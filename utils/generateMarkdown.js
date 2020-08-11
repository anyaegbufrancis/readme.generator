// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  # Table of Contents
  
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributors](#contributors)
  -[Test](#test)
  -[Github](#github)
  -[Email](#email)
  ## Description
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
  ${data.description}
  
  ## Installatio
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  FOr additional licensing information. please click below:
  
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  ${data.license}
  
  ## Contributors
  
  ${data.contributors}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  For questions, concerns, comments or your valued inputs regarind this README.md generator, kindly go to my Github page
  on the link below:
  
  -[Github Profile](https://github.com/${data.github})
                    
  You can also reach me  on my email address: ${data.email}.
  ${data.email}
`;
}

module.exports = generateMarkdown;
