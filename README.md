# Array XOR

[![Build Status](https://travis-ci.org/kimmobrunfeldt/arr-uniq.svg?branch=master)](https://travis-ci.org/kimmobrunfeldt/arr-uniq)

Generic array xor function which supports equals predicate function.

## Install

```
npm install arr-uniq
```

## Usage

```js
var xor = require('arr-uniq');

xor([1, 2], [2, 3]);
//=> [1, 3]

xor([1, 2], [2, 3], [3, 4]);
//=> [1, 4]

xor([{id: 1}, {id: 2}], [{id: 2}, {id: 3}], function equals(a, b) {
    return a.id === b.id;
});
//=> [{id: 1}, {id: 3}]
```

## API

### xor(...arrays, [equalsPredicate])

Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference) of the provided arrays.

#### ...arrays

*Required*  
Type: `array`

Two or more arrays to do XOR operation.

#### equalsPredicate

Type: `function`  
Default: `function(a, b) { return a === b; }`

Equality function. Should return true if `a` and `b` items are equal.


## License

MIT
