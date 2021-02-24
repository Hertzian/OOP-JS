// constructor function
function Ciir(radius) {
  // console.log('this: ', this) // points to Ciir fn
  this.radius = radius
  this.draw = function() {
    console.log('draw')
  }

  // return this // this happens automatically with "new" operator
}

const ciir = new Ciir(1)