const capitalize = require('./capitalize');

test('capitalize foo string to equal Foo', () => {
  expect(capitalize('foo')).toEqual('Foo');
});
