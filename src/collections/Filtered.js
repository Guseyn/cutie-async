'use strict'

const { AsyncObject } = require('@cuties/cutie')

class CallbackWithFilteredCollection extends AsyncObject {
  constructor (callback, collection, ...filteredValues) {
    super(callback, collection, ...filteredValues)
  }

  syncCall () {
    return (callback, collection, ...filteredValues) => {
      callback(collection.filter((elm, index) => {
        return filteredValues[index]
      }))
      return callback
    }
  }
}

class Filtered extends AsyncObject {
  constructor (collection, filter) {
    super(collection, filter)
  }

  asyncCall () {
    return (collection, filter, callback) => {
      let filteredValues = []
      collection.forEach((elm, index, array) => {
        filteredValues.push(filter(elm, index, array))
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

module.exports = Filtered
