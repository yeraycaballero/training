var StringCalculator = require('../src/stringCalculator')
,   StringParser = require('../src/StringParser')
,   Calculator   = require('../src/Calculator')
,   expect = require('expect.js');


describe('StringCalculator', function() {
    var stringCalculator;

    beforeEach(function() {
        var stringParser = new StringParser();
        var calculator = new Calculator();
        stringCalculator = new StringCalculator(stringParser, calculator);
    });

    it ('should return 0 for empty string', function() {
        expect(0).to.equal(stringCalculator.add(''));
    });

    it ('should sum ext of lenght 1', function() {
        expect(1).to.equal(stringCalculator.add('1'));
    });

    it ('should sum text of length 2', function() {
        expect(3).to.equal(stringCalculator.add('1,2'));
    });

    it ('should sum text of any length', function() {
        expect(6).to.equal(stringCalculator.add('1,2,3'));
    });

    it ('should throw an exception if the array contains negative numbers', function() {
        expect(stringCalculator.add).withArgs('-1,-2, 3').throwException();
    });

});
