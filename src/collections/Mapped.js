'use strict'

const { AsyncObject } = require('@cuties/cutie')
const { TheSameObjectWithValue } = require('@cuties/object')

class CallbackWithMappedArray extends AsyncObject {
  constructor (callback, ...results) {
    super(callback, ...results)
  }

  syncCall () {
    return (callback, ...results) => {
      callback(results)
      return callback
    }
  }
}

class CallbackWithMappedObject extends AsyncObject {
  constructor (callback, obj, ...results) {
    super(callback, obj, ...results)
  }

  syncCall () {
    return (callback, obj, ...results) => {
      callback(obj)
      return callback
    }
  }
}

class Mapped extends AsyncObject {
  constructor (collection, mapper) {
    super(collection, mapper)
  }

  asyncCall () {
    return (collection, mapper, callback) => {
      let results = []
      if (Array.isArray(collection)) {
        collection.forEach((elm, index, array) => {
          results.push(mapper(elm, index, array))
        })
        new CallbackWithMappedArray(
          callback,
          ...results
        ).call()
      } else if (collection && typeof collection === 'object' && collection.constructor === Object) {
        let newCollection = Object.assign({}, collection)
        for (var key in newCollection) {
          results.push(
            new TheSameObjectWithValue(
              newCollection, key, mapper(key, newCollection[key])
            )
          )
        }
        new CallbackWithMappedObject(
          callback,
          newCollection,
          ...results
        ).call()
      } else {
        throw new Error('first argument must be an array or an object')
      }
    }
  }

  callbackWithError () {
    return false
  }
}

module.exports = Mapped
