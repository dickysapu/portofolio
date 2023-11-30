const sum = require('./sum');

test('test jest', () => {
  expect(sum(1, 2)).not.toBe(300);
});