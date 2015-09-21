var assert = require('assert');
var uniq = require('../src/index');

describe('arr-uniq', function() {
    it('basic uniq', function() {
        assert.deepStrictEqual(uniq([1, 1, 2, 2, 3, 3, 3, 4]), [1, 2, 3, 4]);
    });

    it('predicate', function() {
        var result = uniq([{id: 1}, {id: 2}, {id: 2}, {id: 3}], function equals(a, b) {
            return a.id === b.id;
        });
        assert.deepStrictEqual(result, [{id: 1}, {id: 2}, {id: 3}]);
    });
});
