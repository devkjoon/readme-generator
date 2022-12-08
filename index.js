const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./generateREADME.js')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?'
        },
        {
            type: 'input', 
            name: 'description',
            message: `Let's add a description for your project!`
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter your usage information!'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'How can others contribute?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How do you test this project?'
            validate: testsInput => {
                if (testsInput) {
                    return true
                } else {
                    console.log('Please explain how to test this project!');
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license is your project?',
            choices: ['AGPLv3', 'Apache', 'BSD 2-clause', 'GPLv3', 'MIT', 'LGPLv3', 'other']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ])