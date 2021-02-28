function Shape(color) {
  this.color = color
}

Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

function Circle(radius, color) {
  Shape.call(this, color) // to asing Shape thisArg to Circle object or color arg assign to window obj
  
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.draw = function () {
  console.log('draw')
}

const sha = new Shape()
const cir = new Circle(1, 'red')
