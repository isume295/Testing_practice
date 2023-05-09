const stringLength = require('./stringLength');
const reverseString = require('./reverseString');
const Calculator = require('./calculator');
const capitalize = require('./capitalize');


test('couts hello to equal 4', () => {
  expect(stringLength('hello')).toBe(5);
});

test('character must be greater than 1', () => {
  expect(() => stringLength('')).toThrow(RangeError);
});

test('character must be less than 10', () => {
  expect(() => stringLength('jhdjskjhdkjfhksj')).toThrow(RangeError);
});

test('couts hello to equal olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('capitalize hello must be equal Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

describe('my calculator', () => {
  let calc = new Calculator();

  describe('addition', () => {
    test('add 3 + 3 must be equal 6', () => {
      expect(calc.add(3,3)).toBe(6);
    });

    test('add 3 + 10 must be equal 13', () => {
      expect(calc.add(3,10)).toBe(13);
    });

    test('add 10 + 10 must be equal 20', () => {
      expect(calc.add(10,10)).toBe(20);
    });
  })

  describe('subtraction', () => {
    test('subtract 3 - 3 must be equal 0', () => {
      expect(calc.subtract(3,3)).toBe(0);
    });

    test('subtract 3 - 10 must be equal -7', () => {
      expect(calc.subtract(3,10)).toBe(-7);
    });

    test('subtract 10 - 10 must be equal 0', () => {
      expect(calc.subtract(10,10)).toBe(0);
    });
  })

  describe('multiplication', () => {
    test('multiply 3 * 3 must be equal 9', () => {
      expect(calc.multiply(3,3)).toBe(9);
    });

    test('multiply 3 * 10 must be equal 30', () => {
      expect(calc.multiply(3,10)).toBe(30);
    });

    test('multiply 10 * 10 must be equal 100', () => {
      expect(calc.multiply(10,10)).toBe(100);
    });
  })

  describe('division', () => {
    test('divide 3 / 3 must be equal 1', () => {
      expect(calc.divide(3,3)).toBe(1);
    });

    test('divide 15 / 5 must be equal 3', () => {
      expect(calc.divide(15,5)).toBe(3);
    });

    test('divide 15 / 0 must throw an error', () => {
      expect(() => calc.divide(15,0)).toThrow(Error);
    });
  })
});


 