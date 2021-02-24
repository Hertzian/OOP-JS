function Circle(radius) {
  this.radius = radius
  this.draw = function () {
    console.log('draw')
  }
}

const Circle1 = new Function(
  'radius',
  `
this.radius = radius;
this.draw = function() {
  console.log('draw');
}
`
)

Circle.call({}, 1) // "{}" refer "this"
// Circle.call({}, 1,2,3,4) // with multiple args
Circle.apply({}, [1,2,3]) // pases an array to second arg if the app requires it

const circu1 = new Circle1(1)
const another = new Circle(1)
