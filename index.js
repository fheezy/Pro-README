//required modules/packages 
const inquirer = require('inquirer');
const fs = require('fs');
const util = required('util');

const generateMarkdown = require('./generateMarkdown');

//inquirer to generate questions 
inquirer.prompt(
    [
        {
            type:'input',
            message:'What is the name of the project?',
            name:'title',
            //validate property to checl that the user provided a value
            // validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type:'input',
            message:'Type a brief description of your project: ',
            name:'description',
            //validate property to checl that the user provided a value
            // validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type:'input',
            message:'Describe the installation process if any: ',
            name:'installation',
            //validate property to checl that the user provided a value
            // validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type:'input',
            message:'What is this project usage for: ',
            name:'usage',
            //validate property to checl that the user provided a value
            // validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type:'list',
            message:'Chose the appropriate license for this project: ',
            name:'license',
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
            //validate property to checl that the user provided a value
            // validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type:'input',
            message:'Who are the contributors of this projects?',
            name:'contributing',
            //validate property to checl that the user provided a value
            // validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type:'input',
            message:'Is there a test included?',
            name:'test',
            //validate property to checl that the user provided a value
            // validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type:'input',
            message:'What is your github username?',
            name:'username',
            //validate property to checl that the user provided a value
            // validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type:'input',
            message:'Please input your email: ',
            name:'email',
            //validate property to checl that the user provided a value
            // validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
    ] )

    //function to write README file 
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, function(err) {
          console.log(fileName)
          console.log(data)
          if(err) {
            return console.log(err)
          } else {
            console.log("success")
          }
        })
    }

    //function to initialize program
    function init() {
        inquirer.prompt(questions) // return function
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
    }

    //function call to initialize the program
    init();

