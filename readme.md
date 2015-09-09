# claim [![Build Status](https://travis-ci.org/kevva/claim.svg?branch=master)](https://travis-ci.org/kevva/claim)

> Tiny assertion library


## Install

```
$ npm install --save claim
```


## Usage

```js
var claim = require('claim');

claim.true(true);
claim.false(false);
claim.is('foo', 'foo');
claim.not('foo', 'bar');
claim.same(['a', 'b'], ['a', 'b']);
claim.notSame({a: 'a'}, {a: 'b'});
claim.regexTest(/^abc$/, 'abc');
```


## API

### .pass([message])

Passing assertion.

### .fail([message])

Failing assertion.

### .ok(value, [message])

Assert that `value` is truthy.

### .notOk(value, [message])

Assert that `value` is falsy.

### .true(value, [message])

Assert that `value` is `true`.

### .false(value, [message])

Assert that `value` is `false`.

### .is(value, expected, [message])

Assert that `value` is equal to `expected`.

### .not(value, expected, [message])

Assert that `value` is not equal to `expected`.

### .same(value, expected, [message])

Assert that `value` is deep equal to `expected`.

### .notSame(value, expected, [message])

Assert that `value` is not deep equal to `expected`.

### .throws(function, error, [message])

Assert that `function` throws an error.

`error` can be a constructor, regex or validation function.

### .doesNotThrow(function, [message])

Assert that `function` doesn't throw an `error`.

### .regexTest(regex, contents, [message])

Assert that `regex` matches `contents`.

### .ifError(error, [message])

Assert that `error` is falsy.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
