const Shape = require('./shapes').Shape;
const Triangle = require('./shapes').Triangle;
const Square = require('./shapes').Square;
const Circle = require('./shapes').Circle;



describe('Shape', () => {
    it('Should set the color of the shape', () => {
      const shape = new Shape();
      shape.setColor('orange');
      expect(shape.color).toEqual('orange');
    });
  });



describe('Triangle', () => {
    it('should render a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
        expect(shape.render()).toEqual(expected);

    })
});

describe('Square', () => {
    it('should render a red square', () => {
        const shape = new Square();
        shape.setColor('red'); 
        const expected = `<rect x="10" y="10" width="200" height="200" fill="red" />`;
        expect(shape.render()).toEqual(expected)
    })
}); 

describe('Circle', () => {
    it('should render a green circle', () => {
        const shape = new Circle();
        shape.setColor('green'); 
        const expected = `<circle cx="50" cy="50" r="20" fill="green" />`;
        expect(shape.render()).toEqual(expected);
    })
}); 



