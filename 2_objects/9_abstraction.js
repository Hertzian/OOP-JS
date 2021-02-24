function Circuu(radius) {
  this.radius = radius

  this.defaultLocation = { x: 0, y: 0 }

  this.computeOptimumLocation = function (factor) {
    // ...
  }

  this.draw = function () {
    this.computeOptimumLocation(0.1)

    console.log('draw')
  }
}

const circuu = new Circuu(10)
circuu.computeOptimumLocation()
circuu.draw()


// Abstraction = Hide the details, show the essentials