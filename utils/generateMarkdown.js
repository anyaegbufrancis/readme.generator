// function to generate markdown for README

function generateMarkdown(response) {
   return `
  # ${response.title}   ![License](https://img.shields.io/badge/License-${response.license}-blue.svg)
  
  <br>
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contributions)
  - [Test](#test)
  - [Authors](#authors)
  - [Questions](#questions)
  
  <br>
  
  ## Description  
  
  ${response.description}
  
  ## Installation
  
  ${response.installation}
  
  ## Usage
  
  ${response.usage}
  
  ## License
  
  This project is licensed under:
  
   ![License](https://img.shields.io/badge/License-${response.license}-blue.svg)
  
  ${response.license}
  
  ## Contribution
  
  Please contact me on my email [Email Address](${response.email}) or fork the repository from my github account: [Github Profile](https://github.com/${response.github}). Please make a pull request and we can review the updates, corrections or bug fixes together.
  
  ## Test
  
  ${response.tests}
  
  ## Authors
  
  The author of this project is: 
  
  ${response.authors}. 
  
  To contribute, please refer to [Contributors](#contributors) section.
  
  ## Questions
  
  For questions, concerns, comments or your valued inputs regargind this README.md generator, kindly go to my Github page or contact me on my email address below:
    
  - [Github Profile](https://github.com/${response.github})
                    
  - ${response.email}
`;
}

module.exports = generateMarkdown;
