const inquirer = require('inquirer');
const fs = require('fs');

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
            message: 'What type of contributions would you like to see?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter your test instructions!'
        },
        {
            type: 'input',
            name: 'license',
            message: 'What license is your project?',
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