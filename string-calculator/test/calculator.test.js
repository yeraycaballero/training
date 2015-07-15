var Calculator   = require('../src/calculator')
,   expect = require('expect.js');


describe('Calculator', function() {
    var calculator;

    beforeEach(function() {
        calculator = new Calculator();
    });

    it ('should throw an exception if the array contains negative numbers', function() {
        expect(calculator.add).withArgs([-1,-2, 3]).throwException();
    });

    it ('should throw an exception with all negative numbers', function() {
        expect(calculator.add).withArgs([-1,-2, 3]).throwException(function(e) {
            expect(e.message.indexOf(-1)).to.not.equal(-1);
            expect(e.message.indexOf(-2)).to.not.equal(-1);
            expect(e.message.indexOf(3)).to.equal(-1);
        });
    });

});
