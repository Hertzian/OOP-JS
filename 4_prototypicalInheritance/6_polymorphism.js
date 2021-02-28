function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log('duplicate')
}

function Circle() {}

extend(Circle, Shape)

Circle.prototype.duplicate = function () {
  console.log('duplicate circle')
}

function Square() {}

extend(Square, Shape)

Square.prototype.duplicate = function () {
  console.log('duplicate square')
}

const shapes = [
  // each of items have their custom .duplicate method
  new Circle(),
  new Square(),
]

// this prints:
// duplicate circle
// duplicate square
for (let shape of shapes) {
  shape.duplicate()
}

// Avoid creating inheritance hierarchies!
// use inheritance only in one level!
// favor Composition over Inheritance