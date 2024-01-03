const Shape = require('./shapes'); 

describe('Shape', () => {
    it('should set the chosen color to the shape', () => {
        const shape = new Shape();
        shape.setColor('blue');
        expect(shape.color).toEqual('blue');
    })
});