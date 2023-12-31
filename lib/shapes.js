const fs = require('fs'); 



class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;

    }

    render() {
        return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" />`;

}

}

const circle = new Circle(30, 'red');  

circle.render();


class Square {
    constructor(width, height, color) {
        // this.x = x;
        // this.y = y; 
        this.width = width;
        this.height = height;
        this.color = color; 
    }

    render () {
        return `<square rect x="10" y="10" width="${this.width}" height="${this.height}" fill="${this.color}" /> `; 
    }
}

const square = new Square(10, 'blue');

square.render();










module.exports = Circle;
module.exports = Square; 
 