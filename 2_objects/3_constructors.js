// constructor function
function Circle(radius) {
  // console.log('this: ', this) // points to Circle fn
  this.radius = radius
  this.draw = function() {
    console.log('draw')
  }

  // return this // this happens automatically with "new" operator
}

const circle = new Circle(1)