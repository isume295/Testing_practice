const stringLength = require('./stringLength');

test('couts hello to equal 4', () => {
  expect(stringLength('hello')).toBe(5);
});

test('character must be greater than 1', () => {
  expect(() => stringLength('')).toThrow(RangeError);
});

test('character must be less than 10', () => {
  expect(() => stringLength('jhdjskjhdkjfhksj')).toThrow(RangeError);
});