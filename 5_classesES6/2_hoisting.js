sayHello() // this is valid because hoisting

// function declaration, are hoisted, this means, are raised at the top of the code
function sayHello() {}

// sayGoodbye() // this causes error, 'cannot access before initialization'
// console.log(number) // same as before

// function expression, and are NOT hoisted
const sayGoodbye = function () {} // this is an object/function
const number = 1 // this is a primitive

// class declaration - not hoisted
class Circle {}

// class expression - not hoisted
const Square = class {}
