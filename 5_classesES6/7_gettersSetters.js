const _radius2 = new WeakMap()

class Circle7 {
  constructor(radius) {
    _radius2.set(this, radius)

    // Object.defineProperty(this, 'radius', { // previous sintax to implement getter
    //   get: function() {

    //   }
    // })
  }

  // to read this value from outside
  get radius() {
    // reads like a property!
    return _radius2.get(this)
  }

  set radius(value) {
    // circle7.radius = 10
    if (value <= 0) throw new Error('invalid radius')

    _radius2.set(this, value)
  }
}

const circle7 = new Circle7(1)
console.log('7_gettersSetters...')
console.log(circle7.radius)
