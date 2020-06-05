const reverseString = require('./reverseString');

test('reverseString should reverse the string', () => {
    expect(reverseString('hello')).toBe('olleh')
});