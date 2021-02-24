function Cirr(radius) {
  this.radius = radius
  this.draw = function () {
    console.log('draw')
  }
}

const cirr = new Cirr(10)

for (let key in cirr) {
  console.log('key: ', key)
  console.log('valPair: ', key, cirr[key])
  if (typeof cirr[key] !== 'function') {
    console.log('!fn: ', key, cirr[key])
  }
}

const keys = Object.keys(cirr)
console.log('keys: ', keys)


if('radius'in cirr) {
  console.log('Cirr has a radius')
}