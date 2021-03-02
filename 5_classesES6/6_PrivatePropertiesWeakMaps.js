const _radius1 = new WeakMap() // the '_' is to refer to private members
const _move = new WeakMap()
const privateProps = new WeakMap()

class Circle6 {
  constructor(radius) {
    privateProps.set(this, {
      radius: radius,
      move: () => {

      }
    })
    // using privateProps aproach:
    // privateProps.get(this).radius

    _radius1.set(this, radius)

    // _move.set(this, function() { // using regular fn, 'this' object points to global object
    _move.set(this, () => { // arrow fn uses 'this' within the container function
      console.log('move', this)  
    })
  }

  draw() {
    // console.log(_radius1.get(this))
    _move.get(this)()

    console.log('draw')
  }
}

const circle6 = new Circle6(1) 
circle6.draw()