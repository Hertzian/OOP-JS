function Circc(radius) {
  this.radius = radius

  let defaultLocation = { x: 0, y: 0 } // to hide members from outside

  let computeOptimumLocation = function (factor) {
    // ...
  }

  this.draw = function () {
    let x, y

    computeOptimumLocation(0.1)

    // defaultLocation
    this.radius // to access a member of Circc

    console.log('draw')
  }
}

const circc = new Circc(10)
circc.draw()

// Abstraction = Hide the details, show the essentials
