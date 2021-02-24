function Curcu(radius) {
  this.radius = radius
  this.draw = function () {
    console.log('draw')
  }
}

const circu = new Curcu(10)

circu.location = { x: 1 }

const propertyName = 'center-location'
circu[propertyName] = { y: 1 }

delete circu.location // to delete property
// delete circu.['location'] // the same as above