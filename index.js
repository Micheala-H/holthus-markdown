// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps for installing your project?',
    },
    {
        type: 'input',
        name: 'use',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What are the guidelines for contributing to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would someone test your project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license is your project under',
        choices: ['MIT, '],
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
