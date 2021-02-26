// the same:
// let myObj
// Object.getPrototypeOf(myObj)
// myObj.__proto__ //parent of myObj
// Constructor.prototype()

// the same:
// let array = []
// array.__proto__
// Array.prototype

function Circle(radius) {
  this.radius = radius
}

// the same
const circle = new Circle(1)
Circle.prototype
