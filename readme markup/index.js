// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const { type } = require('os')
const generateMarkdown = require('./generateMarkdown.js');


const { title } = require('process');
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            name: "email",
            message: "What is your e-mail address?",
            type: "input",

        },
        {
            name: "github",
            message: "What is your Github username?",
            type: "input",

        },

        {
            name: "Title",
            message: "What is the title of your project",
            type: "input",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('Please include a title');
                    return false;
                }
            }

        }, {

            name: "Description",
            message: "Give a short description of your project",
            type: "input",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Include Description');
                    return false;

                }
            }


        }, {

            name: "Installation",
            message: "What instructions should the users follow to install your application",
            type: "input",
            validate: installationInput => {
                if (installationInput) {
                    return true

                }
                else {
                    console.log('Please')

                }

            }

        }, {
            name: "Usage",
            message: "How to use this application?",
            type: "input",
            validate: usageInput => {
                if (usageInput) {
                    return true
                }
                else {
                    console.log('Please include sample of code');
                }
            }
        }, {


            name: "License",
            message: "Which of the follwoing license you used for this project",
            type: "list",
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD']

        }, {

            name: "Contributing",
            message: "How can someone contribute to this project?",
            type: "input",

            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                }

                else {
                    console.log('Please include how they would contribute')
                    return false;
                }
            }



        },
        {

            name: "Name",
            message: "What is your name",
            type: "input",
            validate: NameInput => {
                if (NameInput) {
                    return true

                }
                else {
                    console.log('Please Enter your Name')

                }

            }

        }


    ]) .then(userData => {
        fs.writeFile('./README.md', generateMarkdown(userData), function(err) {
            if (err) console.log(err);
        })
    })