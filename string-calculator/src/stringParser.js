var di = require('di');
var DelimiterFinder = require('./delimiterFinder');

function StringParser(delimiterFinder) {
    this.delimiterFinder = delimiterFinder;
}

StringParser.prototype.parse = function(text) {
    var delimiter = this.delimiterFinder.find(text);

    var numbers = text.split(delimiter);

    return numbers.map(function(char) {
        return toInteger(char);
    });
}

function toInteger(char) {
    if (char.trim().length == 0) return 0;
    return parseInt(char);
}


di.annotate(StringParser, new di.Inject(DelimiterFinder));

module.exports = StringParser;
