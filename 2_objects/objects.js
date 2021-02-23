// object literals
// {} <- object literals
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log('draw')
  },
}

// factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw')
    }
  }

}
