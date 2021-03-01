// function Circle(radius) {
//   this.radius = radius

//   this.draw = function () {
//     console.log('draw')
//   }
// }

class Circle1 {
  constructor(radius) {
    this.radius = radius
    this.move = function() {}// if i dont want method into prototype
  }

  draw() {
    console.log('draw')
  }
}

const c = new Circle1(1)