let person = { name: 'Lalo' }

for (let key in person) {
  console.log(key)
}
console.log(Object.keys(person))

let objectBase = Object.getPrototypeOf(person)
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
console.log(descriptor)


Object.defineProperties(person, 'name', { // this object param is to write Descriptor
  writable: false,
  enumerable: false,
  // enumerable: true,
  configurable: false
})

person.name = 'John'

delete person.name // doesn't delete the property becase 'configurable: false' in descriptor

console.log(person)
console.log(Object.key(person))