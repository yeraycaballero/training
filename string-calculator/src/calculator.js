var _ = require('lodash');

function Calculator() {

}

Calculator.prototype.add = function(values) {
    var result = 0;
    _.forEach(values, function(value) {
        result += value;
    });
    return result;
}

module.exports = Calculator;
