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
claim.same({a: 'a'}, {a: 'a'});
claim.same(['a', 'b'], ['a', 'b']);
claim.notSame({a: 'a'}, {a: 'b'});
claim.notSame(['a', 'b'], ['c', 'd']);
```


## API

### .true(value, message)

Assert that `value` is `true` with an optional description message.

#### value

*Required*  
Type: `boolean`

Value to be tested.

#### message

Type: `string`

Message to be shown upon failure.

### .false(value, message)

Assert that `value` is `false` with an optional description message.

#### value

*Required*  
Type: `boolean`

Value to be tested.

#### message

Type: `string`

Message to be shown upon failure.

### .is(value, expected, message)

Assert that `value` is equal to `expected` with an optional description message.

#### value

*Required*  
Type: `mixed`

Value to be tested.

#### expected

*Required*  
Type: `mixed`

Value to be tested against.

#### message

Type: `string`

Message to be shown upon failure.

### .not(value, expected, message)

Assert that `value` is not equal to `expected` with an optional description message.

#### value

*Required*  
Type: `mixed`

Value to be tested.

#### expected

*Required*  
Type: `mixed`

Value to be tested against.

#### message

Type: `string`

Message to be shown upon failure.

### .same(value, expected, message)

Assert that `value` is deep equal to `expected` with an optional description message.

#### value

*Required*  
Type: `mixed`

Value to be tested.

#### expected

*Required*  
Type: `mixed`

Value to be tested against.

#### message

Type: `string`

Message to be shown upon failure.

### .notSame(value, expected, message)

Assert that `value` is not deep equal to `expected` with an optional description message.

#### value

*Required*  
Type: `mixed`

Value to be tested.

#### expected

*Required*  
Type: `mixed`

Value to be tested against.

#### message

Type: `string`

Message to be shown upon failure.

### .error(error, message)

Assert that `error` is `false` with an optional description message.

#### error

*Required*  
Type: `mixed`

Value to be tested.

#### message

Type: `string`

Message to be shown upon failure.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
