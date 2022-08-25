const intToRoman = require('./index');
const { strictEqual } = require('assert');

describe('Roman to Integers', () => {
  it('should handle small numbers', () => {
    strictEqual(intToRoman(1), 'I', '1 should, "I"');
    strictEqual(intToRoman(2), 'II', '2 should, "II"');
    strictEqual(intToRoman(3), 'III', '3 should, "III"');
    strictEqual(intToRoman(4), 'IV', '4 should, "IV"');
    strictEqual(intToRoman(5), 'V', '5 should, "V"');
    strictEqual(intToRoman(9), 'IX', '9 should, "IX"');
    strictEqual(intToRoman(10), 'X', '10 should, "X"');
    strictEqual(intToRoman(11), 'XI');
    strictEqual(intToRoman(19), 'XIX');
    strictEqual(intToRoman(22), 'XXII');
    strictEqual(intToRoman(15), 'XV');
  });
  it('should handle large numbers', function () {
    strictEqual(intToRoman(1000), 'M', '1000 should, "M"');
    strictEqual(intToRoman(1001), 'MI', '1001 should, "MI"');
    strictEqual(intToRoman(1990), 'MCMXC', '1990 should, "MCMXC"');
    strictEqual(intToRoman(2007), 'MMVII', '2007 should, "MMVII"');
    strictEqual(intToRoman(2008), 'MMVIII', '2008 should, "MMVIII"');
  });
});
