'use strict'

const Circle4 = function () {
  this.draw = function () {
    console.log(this)
  }
}

const circ = new Circle4()
// method call
circ.draw()

const draw = circ.draw // just referencing draw method
console.log(draw)

// function call, because is NOT part of an object
draw()
// this points to the global object, window in this case
// with use strict enabled, returns undefined

// classes by default uses 'strict mode'
class Circle5 {
  draw() {
    console.log(this)
  }
}

const circle = new Circle5()
const draw2 = circle.draw
draw2() // return undefined as well
