class Circle3 {
  constructor(radius) {
    this.radius = radius
  }

  // instance method, it can see in the __proto__ 
  draw() {}

  // static method, are utility functions that are not part to a particular object
  // an example of this are Math.floor()
  // no longer available on the Circle object (__proto__)
  static parse(string) {
    const radius = JSON.parse(string).radius
    return new Circle3(radius)
  }
}

// example
class Math2 {
  static abs() {
    console.log('absolute!')
  }
}

Math2.abs() // outputs in console 'absolute!'



const ci = new Circle3(1)
// is accesible in Class reference of Circle3, its working in the Class itself
const cir = Circle3.parse('{"radius": 1}')
console.log(ci)

