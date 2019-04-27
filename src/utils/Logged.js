'use strict'

const { AsyncObject } = require('@cuties/cutie')

class Logged extends AsyncObject {
  constructor (...objs) {
    super(...objs)
  }

  syncCall () {
    return (...objs) => {
      console.log(...objs)
      return objs
    }
  }
}

module.exports = Logged
