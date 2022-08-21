const intToRoman = require('./index');

function doTest(romanString, expected) {
  const result = intToRoman(romanString);
  expect(result).toBe(expected);
}

describe('Roman to Integers', () => {
  test('Basic tests, left greater than right', () => {
    doTest('III', 3);
    doTest('VII', 7);
  });
  test('Complex tests, right greater than left', () => {
    doTest('IV', 4);
    doTest('XL', 40);
  });
  test('Years in roman', () => {
    doTest('MMVIII', 2008);
    doTest('MDCLXVI', 1666);
  });
});
