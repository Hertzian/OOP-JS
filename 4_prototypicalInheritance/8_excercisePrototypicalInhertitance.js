function ext(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}

function HtmlElement() {
  this.click = function () {
    console.log('clicked')
  }
}

HtmlElement.prototype.focus = function () {
  console.log('focused')
}

function HtmlSelectElement(items = []) {
  // HtmlElement.call(this)

  this.items = items

  this.addItem = function (item) {
    this.items.push(item)
  }

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}

// HtmlSelectElement.prototype.click = function() {
//   console.log('click proto')
// }

// ext(HtmlSelectElement, HtmlElement)

HtmlSelectElement.prototype = new HtmlElement()

// the three expresion are the same
// HtmlSelectElement.prototype.constructor = HtmlSelectElement
// new HtmlSelectElement.prototype.constructor()
// new HtmlSelectElement()

const h = new HtmlElement()
const hs = new HtmlSelectElement()
