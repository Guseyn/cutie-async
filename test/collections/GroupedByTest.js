'use strict'

const { DeepStrictEqualAssertion } = require('@cuties/assert')
const { GroupedBy } = require('./../../index')

new DeepStrictEqualAssertion(
  new GroupedBy(
    ['a', 'b', 'bb', 'c', 'cc', 'ccc'], 'length'
  ), { '1': ['a', 'b', 'c'], '2': ['bb', 'cc'], '3': ['ccc'] }
).call()
