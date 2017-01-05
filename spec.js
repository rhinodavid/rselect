const expect = require('chai').expect;
const rselect = require('./index.js');

describe('Rselect', () => {
  it('Should return the only item if n = 1', () => {
    expect(rselect([24], 1)).to.equal(24);
  });

  it('Should return the smallest item', () => {
    expect(rselect([5, 4, 1, 3, 2], 1)).to.equal(1);
  });

  it('Should return the largest item', () => {
    expect(rselect([5, 4, 1, 3, 2], 5)).to.equal(5);
  });

  it('Should return an item of ith significance', () => {
    expect(rselect([5, 4, 1, 3, 2], 2)).to.equal(2);
    expect(rselect([5, 4, 1, 3, 2], 3)).to.equal(3);
    expect(rselect([5, 4, 1, 3, 2], 4)).to.equal(4);
  });

  it('Should throw an error if arr is not an Array', () => {
    expect(rselect.bind(null, { a: 1, b: 2 }, 2)).to.throw(/must be an array/i);
  });

  it('Should throw an error if ith is not an integer', () => {
    expect(rselect.bind(null, [3, 2, 1], 1.5)).to.throw(/integer/);
  });

  it('Should throw an error if ith is out of the range of the array', () => {
    expect(rselect.bind(null, [1, 2, 3], 0)).to.throw(Error);
    expect(rselect.bind(null, [1, 2, 3], 4)).to.throw(Error);
  });
});
