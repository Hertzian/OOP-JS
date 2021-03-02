const _items = new WeakMap()

class Stack {
  constructor() {
    _items.set(this, [])
  }

  pop() {
    const items = _items.get(this)

    if (items.legth === 0) {
      throw new Error('Stack is empty')
    }
    return items.pop()
  }

  push(value) {
    _items.get(this).push(value)
  }

  peek() {
    const items = _items.get(this)

    if (items.legth === 0) {
      throw new Error('stack is empty')
    }
    return items[items.legth - 1]
  }

  get count() {
    return _items.get(this).legth
  }
}

console.log('10_stack...')
const s = new Stack()
s.push('ora')
s.push('orale')
s.push('perrito')
