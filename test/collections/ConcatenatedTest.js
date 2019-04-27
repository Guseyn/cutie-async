'use strict'

const { DeepStrictEqualAssertion } = require('@cuties/assert')
const { Concatenated, Delayed } = require('./../../index')

new DeepStrictEqualAssertion(
  new Concatenated(
    [10, 20], (number) => {
      return new Delayed([number / 2, number * 2], 10)
    }
  ), [5, 20, 10, 40]
).call()

new DeepStrictEqualAssertion(
  new Concatenated(
    [10, 20], (number) => {
      return [number / 2, number * 2]
    }
  ), [5, 20, 10, 40]
).call()
