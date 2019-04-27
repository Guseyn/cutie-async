'use strict'

const { AsyncObject } = require('@cuties/cutie')
const { StrictEqualAssertion } = require('@cuties/assert')
const { Delayed } = require('./../../index')

class _123 extends AsyncObject {
  constructor () {
    super()
  }

  syncCall () {
    return () => {
      return 123
    }
  }
}

new StrictEqualAssertion(
  new Delayed(
    new _123(), 10
  ),
  123
).call()

new StrictEqualAssertion(
  new Delayed(
    123, 10
  ),
  123
).call()
