function Circa(radius) {
  this.radius = radius

  let defaultLocation = { x: 0, y: 0 } // to hide members from outside

  this.getDefaultLocation = function() {
    return defaultLocation
  }

  this.draw = function () {
    console.log('draw')
  }

  Object.defineProperty(this, 'defaultLocation', {
    // getter
    // to get READ ONLY property
    get: function() {
      return defaultLocation
    },
    // setter

    set: function(value) { //it can be validated before setting the default location
      if(!value.x || !value.y) {
        throw new Error('Invalid location.')
      }

      defaultLocation = value
    }
  })
}

const circa = new Circa(10)
circa.defaultLocation = 1 // throws an error because validation in setter
circa.draw()

// Abstraction = Hide the details, show the essentials
