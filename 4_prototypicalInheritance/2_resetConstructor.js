function Shape() {}

Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

function Circle(radius) {
  this.radius = radius
}

// Circle.prototype.constructor = Circle
// new Circle.prototype.constructor -> new Circle()
Circle.prototype = Object.create(Shape.prototype)// reset the prototype
Circle.prototype.constructor = Circle // to reset the constructor function

Circle.prototype.draw = function () {
  console.log('draw')
}

const sh = new Shape()
const ci = new Circle()

// to instantiate an object:
// both are the same
// new Circle.prototype.constructor(1)
// new Circle(1)
