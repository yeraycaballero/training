var StringCalculator = require('../src/stringCalculator')
,   DelimiterFinder = require('../src/DelimiterFinder')
,   StringParser = require('../src/StringParser')
,   Calculator   = require('../src/Calculator')
,   expect = require('expect.js');


describe('StringCalculator', function() {
    var stringCalculator;

    beforeEach(function() {
        var delimiterFinder = new DelimiterFinder();
        var stringParser = new StringParser(delimiterFinder);
        var calculator = new Calculator();
        stringCalculator = new StringCalculator(stringParser, calculator);
    });

    it ('shoud return 0 for empty string', function() {
        expect(0).to.equal(stringCalculator.add(''));
    });

    it ('shoud sum ext of lenght 1', function() {
        expect(1).to.equal(stringCalculator.add('1'));
    });

    it ('shoud sum text of length 2', function() {
        expect(3).to.equal(stringCalculator.add('1,2'));
    });

    it ('shoud sum text of any length', function() {
        expect(6).to.equal(stringCalculator.add('1,2,3'));
    });




});
