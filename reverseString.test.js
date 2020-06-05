const functions = require('./reverseString');

test('reverseString should reverse the string', () => {
    expect(functions.reverseString('hello')).toBe('olleh')
});