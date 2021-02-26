function Circle(radius) {
  // instance members
  this.radius = radius

  this.move = function() {
    this.draw()
    console.log('move')
  }

  // this.draw = function() {
  //   console.log('draw')
  // }
}

// to add property into prototype
// Circle.prototype === c1.__proto__
// prototype members
Circle.prototype.draw = function() {
  // this.move()
  console.log('draw')

}

const c1 = new Circle(1)
const c2 = new Circle(1)

// to overwrite method from prototype
Circle.prototype.toString = function() {
  return 'Circle with radius ' + this.radius
}