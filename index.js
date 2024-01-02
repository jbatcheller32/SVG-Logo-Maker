const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle'); 


// prompts for the user to create their desired logo


const options =  [(

        {
            type: 'input',
            message: 'Enter text for logo (no more than 3 characters)',
            name: 'logo text'
        },

        {
            type: 'input',
            message: 'Enter text color',
            name: 'text color'
        },

        {
            type: 'list',
            message: 'Choose logo shape',
            choices: ['Square', 'Triangle', 'Circle']
        },

        {
            type: 'input',
            message: 'Enter shape color',
            name: 'shape color'

        }

)
    ]

    //function to write the file for SVG logo

    function writeToFile(fileName, data) {

        fs.writeFile(fileName, data, (err) => {
            err ? console.error(err) : console.log('Creating your SVG logo...')
        })
    }; 


// function to initialize the questions and responses

    function init() {

        
    
        inquirer.prompt(options)
        .then((response) => {
            writeToFile('logo.svg', Circle(response));
        })
    
    };
    
    init();

