const romanToIntMap = {
  1000: 'M',
  500: 'D',
  100: 'C',
  50: 'L',
  10: 'X',
  5: 'V',
  1: 'I',
};

const romanMap = [1, 5, 10, 50, 100, 500, 1000];

const intToRomanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
function intToRoman(int = 0) {
  const res = [];
  const length = int.toString().length;
  return int
    .toString()
    .split('')
    .map((value) => {
      Object.keys(romanToIntMap).find((key) => console.log(key));
    }, 0);
}

intToRoman(1);

module.exports = intToRoman;
