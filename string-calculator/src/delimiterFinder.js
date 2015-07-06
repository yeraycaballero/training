var DEFAULT_DELIMITER = /,|\n/;

function DelimiterFinder() {
    this.regExp = /\/\/(.+)\n/;
}

DelimiterFinder.prototype.find = function(text) {
    var groups = this.regExp.exec(text);

    if (groups && groups[1]) {
        return groups[1];
    } else {
        return DEFAULT_DELIMITER;
    }
}

module.exports = DelimiterFinder;
