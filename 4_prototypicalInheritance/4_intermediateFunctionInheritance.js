function Shape(color) {
  this.color = color
}

Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

// to extend inheritance, its an intermediate function Inheritance :D
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}

function Circle(radius, color) {
  Shape.call(this, color) // to asing Shape thisArg to Circle object or color arg assign to window obj

  this.radius = radius
}

extend(Circle, Shape)


Circle.prototype.draw = function () {
  console.log('draw')
}

function Square(size) {
  this.size = size
}

extend(Square, Shape)

const shap = new Shape()
const circ = new Circle(1, 'red')
const sq = new Square(10)
