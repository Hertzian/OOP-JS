class Shape {
  constructor(color) {
    this.color = color
  }

  move() {
    console.log('move')
  }
}

class Circle8 extends Shape {
  constructor (color, radius) {
    super(color) // call Sape constructor (parent), color prop is from Shape
    this.radius = radius
  }

  draw() {
    console.log('draw')
  }
}

console.log('8_inheritance...')
const circle8 = new Circle8('red', 10)
