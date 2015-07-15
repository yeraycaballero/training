var _ = require('lodash')
,   di = require('di')
,   StringParser = require('./StringParser')
,   Calculator = require('./Calculator');

var StringCalculator = function StringCalculator(stringParser, calculator) {
    this.stringParser = stringParser;
    this.calculator = calculator;
}

StringCalculator.prototype.add = function(text) {
    if (text.length == 0) return 0;

    var numbers = this.stringParser.parse(text);
    return this.calculator.add(numbers);
}


di.annotate(StringCalculator, new di.Inject(StringParser));
di.annotate(StringCalculator, new di.Inject(Calculator));

module.exports = StringCalculator;
