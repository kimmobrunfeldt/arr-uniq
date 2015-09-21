var _ = {
    each: require('lodash.foreach'),
    findIndex: require('lodash.findindex')
};

// XXX: There is a lot of room for performance optimization
function uniq(array, equals) {
    equals = equals || defaultEquals;

    var newArray = [];
    _.each(array, function(item) {
        var exists = _.findIndex(newArray, function(newItem) {
            return equals(newItem, item);
        }) !== -1;

        if (!exists) {
            newArray.push(item);
        }
    });

    return newArray;
}

function defaultEquals(a, b) {
    return a === b;
}

module.exports = uniq;
