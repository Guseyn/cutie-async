'use strict'

const { AsyncObject } = require('@cuties/cutie')

class GroupedBy extends AsyncObject {
  constructor (collection, key) {
    super(collection, key)
  }

  syncCall () {
    return (collection, key) => {
      return collection.reduce((groups, elm) => {
        (groups[elm[key]] = groups[elm[key]] || []).push(elm)
        return groups
      }, {})
    }
  }
}

module.exports = GroupedBy
