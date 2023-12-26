const inquirer = require('inquirer');
const fs = require('fs');


inquirer
.prompt(

        {
            type: 'input',
            message: 'enter text for logo (no more than 3 characters)',
            name: 'logo text'
        },

        {
            type: 'input',
            message: 'Enter text color',
            name: 'text color'
        },

        {
            type: 'list',
            message: 'Enter logo shape',
            name: 'logo shape'
        },

        {
            type: 'input',
            message: 'Enter shape color',
            name: 'shape color'

        }

)

        .then((responses) => { 

            fs.writeFile('logo.svg', responses.toString(), (err) => {
                err ? console.log(err) : console.log('Creating your SVG logo...')
            })
        })

