var Triangle = require('./../js/triangle.js').triangleModule;

describe('Triangle', function() {
  var reusableTriangle;

  beforeEach(function() {
    reusableTriangle = new Triangle(5, 5, 5);
  });

  it('should show how beforeEach() works', function() {
    console.log(reusableTriangle);
  });

  it('should test whether a Triangle has three sides', function() {
    // var triangle = new Triangle(3,4,5)
    expect(reusableTriangle.side1).toEqual(5)
    expect(reusableTriangle.side2).toEqual(5)
    expect(reusableTriangle.side3).not.toEqual(6)
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var notTriangle = new Triangle(3,9,22)
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  it('should correctly determine whether three lengths are equal', function() {
    // var triangle = new Triangle(2,2,2)
    expect(reusableTriangle.side1).toEqual(5)
    expect(reusableTriangle.side2).toEqual(5)
    expect(reusableTriangle.side3).toEqual(5)
  });

});
