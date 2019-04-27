'use strict'

const { AsyncObject } = require('@cuties/cutie')
const { DeepStrictEqualAssertion } = require('@cuties/assert')
const { Filtered } = require('./../../index')

class IsMoreThan10 extends AsyncObject {
  constructor (value) {
    super(value)
  }

  syncCall () {
    return (value) => {
      return value > 10
    }
  }
}

new DeepStrictEqualAssertion(
  new Filtered(
    [5, 20, 10, 40], (number) => {
      return new IsMoreThan10(number)
    }
  ), [20, 40]
).call()

new DeepStrictEqualAssertion(
  new Filtered(
    [5, 20, 10, 40], (number) => {
      return number > 10
    }
  ), [20, 40]
).call()
