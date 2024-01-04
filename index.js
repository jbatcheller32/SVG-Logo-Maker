const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');

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

// for the prompts we are using all the "names" for the if statements to create the svg based on the user input

inquirer.prompt(questions)
    .then((responses) => {
        const { logoText, textColor, shapeList, shapeColor } = responses;
        let svg = '';

        // if statement to apply the chosen color to each shape

        if (shapeList === 'Triangle') {
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            svg = triangle.render();
        } else if (shapeList === 'Square') {
            const square = new Square();
            square.setColor(shapeColor);
            svg = square.render();
        } else if (shapeList === 'Circle') {
            const circle = new Circle();
            circle.setColor(shapeColor);
            svg = circle.render();
        } else {
            console.error('Please choose a shape');
            return; // throw an error if no valid shape selected. but you have to choose a shape, so this kinda doesn't matter
        }

        // This is to adjust to position on the text depending on what shape you choose, doesn't really work though
        let x = 150, y = 120;

        if (shapeList === 'Triangle') {
            y = 150;
        } else if (shapeList === 'Square') {
            y = 180;
        }

        // the final logo setting the text 


        const svgLogo = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${svg}
            <text x="${x}" y="${y}" fill="${textColor}" font-size="50" text-anchor="middle">${logoText}</text>
        </svg>`;

        //writing the user input into the logosvg file to create the logo


        fs.writeFile('logo.svg', svgLogo, (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Generating your SVG...');
            }
        });
    });
