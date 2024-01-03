const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes');
const Triangle = require('./lib/shapes');
const Circle = require('./lib/shapes');
const Square = require('./lib/shapes');


// prompts for the user to create their desired logo


const questions = [

    {
        type: 'input',
        message: 'Enter text for logo (no more than 3 characters)',
        name: 'logoText'
    },

    {
        type: 'input',
        message: 'Enter text color',
        name: 'textColor'
    },

    {
        type: 'list',
        message: 'Choose logo shape',
        choices: ['Square', 'Triangle', 'Circle'],
        name: 'shapeList'
    },

    {
        type: 'input',
        message: 'Enter shape color',
        name: 'shapeColor'

    }


];

// for the prompts we are using all the "names" for the if statments to create the svg based on the user input

inquirer.prompt(questions)
    .then((responses) => {

        const { logoText, textColor, shapeList, shapeColor } = responses;
        const shapeObj = new Shape();
        let svg = ' ';

        shapeObj.setColor(shapeColor);

        if (shapeList === Triangle) {
            const triangle = new Triangle()
            triangle.setColor(shapeColor)
            svg = Triangle.render()
        // } if (shapeList === Circle) {
        //     Circle.setColor(shapeColor)
        // } if (shapeList === Square) {
        //     Square.setColor(shapeColor) 
            
         } else {
            return;
        }



        
    });




