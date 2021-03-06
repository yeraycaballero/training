var StringParser =  require('../src/stringParser')
,   expect = require('expect.js');

describe('StringParser', function() {
    var stringParse;

    beforeEach(function() {
        stringParser = new StringParser();
    });

    it ('shoud return [0] for empty string', function() {
        expect([0]).eql(stringParser.parse(''));
    });

    it ('shoud return a array with numbers in the string seperated by', function() {
        expect([1,2]).eql(stringParser.parse('1,2'));
    });

    it ('shoud return an array with numbers in the string separated with new line and commas"', function() {
        expect([1,2,3]).eql(stringParser.parse('1\n2,3'));
    });

    it ('should return an array with numbers separated by a custom delimiter', function() {
        expect([1,2,3]).eql(stringParser.parse('//;\n1;2;3'));
    });
});
