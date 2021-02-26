function Circle(radius) {
  // instance members
  this.radius = radius

  this.move = function () {
    this.draw()
    console.log('move')
  }
}

const c1 = new Circle(1)

// to add property into prototype
// prototype members
Circle.prototype.draw = function () {
  console.log('draw')
}

// c1.draw()

// returns instace members, not prototypes members 
console.log(Object.keys(c1))

// returns all members (instance & prototypes)
for(let key in c1) {
  console.log(key)
}

c1.hasOwnProperty('radius')// returns true
c1.hasOwnProperty('draw')// returns false, because its a prototype