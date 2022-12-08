const inquirer = require('inquirer');
const fs = require('fs');
const index = require('./index.js');
const { cpuUsage } = require('process');



function generateREADME(answer) {
    return `
    # ${Title}
    
    ## Description

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributions](#contributions)
    - [Tests](#tests)
    - [License](#license)
    
    ## Installation
    
    ${installation}
    
    ## Usage
    
    ${usage}

    ## Contributions

    ${contributions}

    ## Tests

    ${tests}

    ## License

    ${license}
    `
}