class Square {
    constructor(width, height, color) {
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

module.exports = Square;