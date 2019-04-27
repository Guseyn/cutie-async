'use strict'

const { AsyncObject } = require('@cuties/cutie')

class CallbackWithFilteredCollection extends AsyncObject {
  constructor (callback, collection, ...filteredValues) {
    super(callback, collection, ...filteredValues)
  }

  syncCall () {
    return (callback, collection, ...filteredValues) => {
      callback(collection.filter((elm, index) => {
        return !filteredValues[index]
      }))
      return callback
    }
  }
}

class Rejected extends AsyncObject {
  constructor (collection, filter) {
    super(collection, filter)
  }

  asyncCall () {
    return (collection, filter, callback) => {
      let filteredValues = []
      collection.forEach(elm => {
        filteredValues.push(filter(elm))
      })
      new CallbackWithFilteredCollection(
        callback,
        collection,
        ...filteredValues
      ).call()
    }
  }

  callbackWithError () {
    return false
  }
}

module.exports = Rejected
