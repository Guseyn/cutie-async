# cutie-async

[![NPM Version](https://img.shields.io/npm/v/@cuties/async.svg)](https://npmjs.org/package/@cuties/async)
[![Build Status](https://travis-ci.org/Guseyn/cutie-async.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-async)
[![codecov](https://codecov.io/gh/Guseyn/cutie-async/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-async) 

[Cutie](https://github.com/Guseyn/cutie) extension for processing collections and utility stuff. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-async/tree/master/test).

## Install

`npm install @cuties/async`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js
const {
  // Needed async objects here from the list below
} = require('@cuties/async')
```

## Collections
-------------------------------

## Concatenated(collection, iteratee)

Applies `iteratee` to each item in `collection`, concatenating the results.

**Params:**
* `collection`: a collection(an array) to iterate over
* `iteratee`: a function to apply to each item in `collection`. It must return some value or a composition of async objects that represents some value.

## Filtered(collection, filter)

Filters `collection` by `filter` function that returns boolean expression or async object that represents some boolean expression for each item.

**Params:**
* `collection`: a collection(an array) to filter
* `filter`: a function to filter `collection`

## GroupedBy(collection, key)

Groups values from `collections` by `key`.

**Params:**
* `collection`: a collection(an array) to group by
* `key`: a key that `collection` is grouped by

## Mapped(collection, mapper)

Represents array or object that was mapped by `mapper` from `collection`. `mapper` can return async object that precesses each item of `collection`.

**Params:**
* `collection`: a collection(an array or object) to be mapped
* `mapper`: a function for mapping

## Rejected(collection, filter)

The opposite of [filter](#filtered).

## Utils
-------------------------------

## Delayed(result, time)

Represents some `result` that can be used after some specified `time`. It's a wrapper around `setTimeout`

## Logged(...objs)

Represents `objs` that have been printed to console.
