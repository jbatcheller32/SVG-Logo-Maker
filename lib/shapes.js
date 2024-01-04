
// this shape class takes the color and applies it to the selected shapes

class Shape {
    constructor() {
        this.color = ''


    }

    setColor(color) {
        this.color = color;

    }
}




// using inheritance to add the shape color to each of the shape options

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="60" y="10" width="200" height="200" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

module.exports = {
    Shape,
    Triangle,
    Square,
    Circle
};


