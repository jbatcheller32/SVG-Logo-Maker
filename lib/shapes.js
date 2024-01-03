
// this shape class takes the color and applies it to the selected shapes

class Shape {
    constructor(color, text, textColor) {
        this.color = color,
        this.text = text,
        this.textColor = textColor

    }

    setColor(color) {
        this.color = color;
    }
}

// using inheritance to add the shape color to each of the shape options

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 50 50, 150 250, 150" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<square rect x="10" y="10" width="200" height="200" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="20" fill="${this.color}" />`
    }
}

module.exports = {
    Shape,
    Triangle,
    Square,
    Circle
};













































// const fs = require('fs');

// // square class
// class Square {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color; 
//     }

//     render () {
//         return `<square rect x="10" y="10" width="${this.width}" height="${this.height}" fill="${this.color}" /> `; 
//     }
// }

// const square = new Square(10, 'blue');

// square.render();


// // circle class

// class Circle {
//     constructor(radius, color) {
//         this.radius = radius;
//         this.color = color;

//     }

//     render() {
//         return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" />`;

// }

// }

// const circle = new Circle(30, 'red');  

// circle.render();




// // triangle class

// const Triangle {
//     constructor()
// }





// module.exports = Square;
// module.exports = Circle;