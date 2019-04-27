'use strict'

const { DeepStrictEqualAssertion } = require('@cuties/assert')
const { Logged, Delayed } = require('./../../index')

new DeepStrictEqualAssertion(
  new Logged(
    new Delayed(
      'delayed message', 10
    )
  ),
  ['delayed message']
).call()
