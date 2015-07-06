
var DelimiterFinder = require('../src/delimiterFinder')
,   expect = require('expect.js');

describe('DelimiterFinder', function() {

    describe('Delimiter by Default', function() {

        it ('should return a coma or new line by default', function() {
            var finder = new DelimiterFinder();
            var text = '1,2';
            var delimiter = finder.find(text);

            expect(delimiter).to.be.ok();
        });
    });

    describe('Custom delimiter', function() {

        it ('should find ; delimiter', function() {
            var finder = new DelimiterFinder();
            var text = '//;\n1;2';
            var delimiter = finder.find(text);

            expect(';').to.be.equal(delimiter);
        });

        it ('should find explicit , delimiter', function() {
            var finder = new DelimiterFinder();
            var text = '//,\n1,2';
            var delimiter = finder.find(text);

            expect(',').to.be.equal(delimiter);
        });
    });

});
