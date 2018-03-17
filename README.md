# test-error

[![NPM version](https://img.shields.io/npm/v/test-error.svg)](https://www.npmjs.com/package/test-error "View this project on NPM")
[![Build Status](https://travis-ci.org/pabigot/test-error.svg?branch=master)](https://travis-ci.org/pabigot/test-error "Check build status on TravisCI")
[![Coverage Status](https://coveralls.io/repos/pabigot/test-error/badge.svg?branch=master&service=github)](https://coveralls.io/github/pabigot/test-error?branch=master "Check coverage status on Coveralls")

This module provides a simple function that can be used in
`assert.throws` to verify that an error is an instance of a particular
class, and/or that its message has specific content.

## Example

```js
'use strict'

const assert = require('assert');
const testError = require('test-error');

// ...

describe('suite', function() {
  it('should throw a TypeError', function() {
    assert.throws(() => testMe(),
                  err => testError(err, TypeError, 'missing argument'));
  });
}); // suite
```

## Installation

    npm install test-error

## Usage

### testError(error, [constructor], [msgCheck])

* `error` {Error} The error instance to be tested.
* `constructor` {Function} Optional class of which `error` must be an
  instance.  If not provided the parentage of `error` is not tested.
* `msgCheck` {String|RegExp} Optional content expected in
  `error.message`.  If a String is provided, the String must appear
  within `error.message` (at any position).  If a RegExp is provided, its
  `test` method must accept `error.message`.  If not provided the value
  of `error.message` is not tested.

Returns `false` if a provided `constructor` or `msgCheck` verification
fails, `true` otherwise.

## Change Log

All changes since 1.0.0 relate to package documentation.

### [1.0.2] - 2018-03-17

* Correct documentation of behavior in the case where no verifications
  are provided.

### [1.0.1] - 2018-03-13

* Add script to `package.json` so coveralls updates are performed.

### 1.0.0 - 2018-03-13

* Initial release

## License

* [MIT License](https://opensource.org/licenses/MIT)

[1.0.2]: https://github.com/pabigot/test-error/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/pabigot/test-error/compare/v1.0.0...v1.0.1
