class Shape1 {
  move() {
    console.log('move')
  }
}

class Circle9 extends Shape1{
  move() {
    super.move() // to call move() from parent
    console.log('cicle move')
  }
}

console.log('9_methodOverriding...')
const circle9 = new Circle9()