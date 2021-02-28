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

// order of declaration is important, or the definition dissapear
// to override method in Shape constructor
Circle.prototype.duplicate = function () {
  // to use original .duplicate from Shape constructor 
  Shape.prototype.duplicate.call(this)

  // result of method overriding
  console.log('duplicate circle')
}

const circl = new Circle(10)
