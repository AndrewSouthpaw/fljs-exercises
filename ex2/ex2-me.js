var output = console.log.bind(console)

const when = fn => (
  (predicate) => (
    (...args) => {
      if (predicate(...args)) {
        fn(...args)
      }
    }
  )
)

const not = predicate => (...args) => !predicate(...args)

/**
 * Foo
 * @param {string} foo something
 */
const printIf = when(output)

function isShortEnough(str) {
  return str.length <= 5
}

const isLongEnough = not(isShortEnough)

var msg1 = 'Hello'
var msg2 = msg1 + ' World'

printIf(isShortEnough)(msg1)		// Hello
printIf(isShortEnough)(msg2)
printIf(isLongEnough)(msg1)
printIf(isLongEnough)(msg2)		// Hello World
