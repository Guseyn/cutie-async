'use strict'

const { AsyncObject } = require('@cuties/cutie')

class CallbackWithDelayedResult extends AsyncObject {
  constructor (callback, result) {
    super(callback, result)
  }

  syncCall () {
    return (callback, result) => {
      callback(result)
      return callback
    }
  }
}

function delay (result, time, callback) {
  setTimeout(function () {
    new CallbackWithDelayedResult(callback, result).call()
  }, time)
}

class Delayed extends AsyncObject {
  constructor (result, time) {
    super(() => { return result }, time)
  }

  asyncCall () {
    return (func, time, callback) => {
      const result = func()
      delay(result, time, callback)
    }
  }

  callbackWithError () {
    return false
  }
}

module.exports = Delayed
