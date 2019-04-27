'use strict'

const { AsyncObject } = require('@cuties/cutie')
const { DeepStrictEqualAssertion } = require('@cuties/assert')
const { Rejected } = require('./../../index')

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
  new Rejected(
    [5, 20, 10, 40], (number) => {
      return new IsMoreThan10(number)
    }
  ), [5, 10]
).call()

new DeepStrictEqualAssertion(
  new Rejected(
    [5, 20, 10, 40], (number) => {
      return number > 10
    }
  ), [5, 10]
).call()
