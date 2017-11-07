function increment(x) { return x + 1 }

function decrement(x) { return x - 1 }

function double(x) { return x * 2 }

function half(x) { return x / 2 }

const compose = (...fns) => (
  (...args) => {
    const recurse = (...rest) => {
      if (rest.length === 1) return rest[0](...args)
      return rest[0](recurse(...rest.slice(1)))
    }

    return recurse(...fns)
  }
)

const pipe = (...fns) => (
  (...args) => {
    if (fns.length === 1) return fns[0](...args)
    return pipe(...fns.slice(1))(fns[0](...args))
  }
)

var f = compose(decrement, double, increment, half)
var p = pipe(half, increment, double, decrement)

f(3) === 4
// true
console.log(f(3) === 4)

f(3) === p(3)
console.log(f(3) === p(3))
// true
