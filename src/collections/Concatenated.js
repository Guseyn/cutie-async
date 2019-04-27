'use strict'

const { AsyncObject } = require('@cuties/cutie')

class CallbackWithConcatenatedResults extends AsyncObject {
  constructor (callback, ...results) {
    super(callback, ...results)
  }

  syncCall () {
    return (callback, ...results) => {
      callback([].concat(...results))
      return callback
    }
  }
}

class Concatenated extends AsyncObject {
  constructor (collection, iteratee) {
    super(collection, iteratee)
  }

  asyncCall () {
    return (collection, iteratee, callback) => {
      let results = []
      collection.forEach(elm => {
        results.push(iteratee(elm))
      })
      new CallbackWithConcatenatedResults(
        callback,
        ...results
      ).call()
    }
  }

  callbackWithError () {
    return false
  }
}

module.exports = Concatenated
