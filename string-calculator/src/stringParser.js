var di = require('di');

var DEFAULT_DELIMITER = /,|\n/;

function StringParser() {
    this.regExp = /\/\/(.+)\n(.*)/;
}

StringParser.prototype.parse = function(text) {
    var groups = this.regExp.exec(text);

    var delimiter = (groups)?  groups[1] : DEFAULT_DELIMITER;
    var content   = (groups)? groups[2]  : text;

    var numbers = content.split(delimiter);

    return numbers.map(function(char) {
        return toInteger(char);
    });
}

function toInteger(char) {
    if (char.trim().length == 0) return 0;
    return parseInt(char);
}


module.exports = StringParser;
