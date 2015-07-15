var _ = require('lodash');

function Calculator() {
}

Calculator.prototype.add = function(values) {
    var result = 0;
    assertAllPositives(values);

    _.forEach(values, function(value) {
        result += value;
    });
    return result;
}

function assertAllPositives(values) {
    var negatives = values.filter(function(n) { return n < 0 });

    if (negatives.length > 0)  {
        throw new Error('Negative numbers not allowed. ' +  negatives.join(','));
    }
}



module.exports = Calculator;
