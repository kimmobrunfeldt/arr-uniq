# Array uniq

[![Build Status](https://travis-ci.org/kimmobrunfeldt/arr-uniq.svg?branch=master)](https://travis-ci.org/kimmobrunfeldt/arr-uniq)

Generic array uniq function which supports equals predicate function.

## Install

```
npm install arr-uniq
```

## Usage

```js
var uniq = require('arr-uniq');

uniq([1, 1, 2, 2, 3, 3, 3, 4]);
//=> [1, 2, 3, 4]

uniq([{id: 1}, {id: 2}, {id: 2}, {id: 3}], function equals(a, b) {
    return a.id === b.id;
});
//=> [{id: 1}, {id: 2}, {id: 3}]
```

## API

### uniq(array, [equalsPredicate])

Creates a duplicate-free version of an array, using equalsPredicate to compare
if items are equal.

#### array

*Required*  
Type: `array`

Input array.

#### equalsPredicate

Type: `function`  
Default: `function(a, b) { return a === b; }`

Equality function. Should return true if `a` and `b` items are equal.


## License

MIT
