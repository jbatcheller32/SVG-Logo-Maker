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

module.exports = Circle;