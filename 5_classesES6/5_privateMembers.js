const _radius = Symbol()
const _draw = Symbol() // Symbols has unique identifier

class Circle {
  constructor(radius) {
    // this.radius = radius
    // this['radius'] = radius // the same as above
    this[_radius] = radius
  }

  [_draw]() { // computed property names, this method has unique value, unique identifier
  }
}

const circle1 = new Circle(1)
// console.log(Object.getOwnPropertyNames(circle1))
// console.log(Object.getOwnPropertySymbols(circle1))

const key = Object.getOwnPropertySymbols(circle1)[0] // to get Symbol property
console.log(circle1[key])