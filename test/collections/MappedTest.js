'use strict'

const { DeepStrictEqualAssertion } = require('@cuties/assert')
const { Mapped, Delayed } = require('./../../index')

new DeepStrictEqualAssertion(
  new Mapped(
    [10, 20], (number) => {
      return new Delayed(number * 2, 10)
    }
  ), [20, 40]
).call()

new DeepStrictEqualAssertion(
  new Mapped(
    [10, 20], (number) => {
      return number * 2
    }
  ), [20, 40]
).call()

new DeepStrictEqualAssertion(
  new Mapped(
    { a1: 10, a2: 20 }, (key, value) => {
      return new Delayed(value * 2, 10)
    }
  ), { a1: 20, a2: 40 }
).call()

new DeepStrictEqualAssertion(
  new Mapped(
    { a1: 10, a2: 20 }, (key, value) => {
      return value * 2
    }
  ), { a1: 20, a2: 40 }
).call()

try {
  new DeepStrictEqualAssertion(
    new Mapped(
      null, (key, value) => {
        return value * 2
      }
    ), { a1: 20, a2: 40 }
  ).call()
} catch (error) {
  new DeepStrictEqualAssertion(
    error, new Error('first argument must be an array or an object')
  ).call()
}
