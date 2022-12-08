const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = ({ title, description, installation, usage, contributions, tests, license, github, email }) =>
    `# ${title}
    
    ## Description

    ${description}

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

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project title?",
            validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter a project title!");
                return false;
            }
            },
        },
        {
            type: "input",
            name: "description",
            message: `Let's add a description for your project!`,
            validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a project description!");
                return false;
            }
            },
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions?",
            validate: (installationInput) => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please explain the installation process!");
                return false;
            }
            },
        },
        {
            type: "input",
            name: "usage",
            message: "Enter your usage information!",
            validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please explain project usage!");
                return false;
            }
            },
        },
        {
            type: "input",
            name: "contributions",
            message: "How can others contribute?",
            validate: (contributionsInput) => {
            if (contributionsInput) {
                return true;
            } else {
                console.log(
                "Please explain how others can contribute to this project!"
                );
                return false;
            }
            },
        },
        {
            type: "input",
            name: "tests",
            message: "How do you test this project?",
            validate: (testsInput) => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please explain how to test this project!");
                return false;
            }
            },
        },
        {
            type: "list",
            name: "license",
            message: "What license is your project?",
            choices: [
            "AGPLv3",
            "Apache",
            "BSD 2-clause",
            "GPLv3",
            "MIT",
            "LGPLv3",
            "other",
            ],
            validate: (licenseInput) => {
            if (licenseInput) {
                return true;
            } else {
                console.log(`Please enter your project's license!`);
                return false;
            }
            },
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?",
            validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your Github username!");
                return false;
            }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            validate: (testsInput) => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please input your email!");
                return false;
            }
            },
        },
    ])
    .then((answers) => {
        const readmePageContent = generateREADME(answers);

        fs.writeFile('README.md', readmePageContent, (err) => {
            err ? console.log(err) : console.log('Successfully generated README!')
        })
    })