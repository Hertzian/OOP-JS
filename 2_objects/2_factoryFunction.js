// factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('draw')
    },
  }
}


const circ = createCircle(1)
// circ.draw()
