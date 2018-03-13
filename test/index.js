'use strict';

const assert = require('assert');
const testError = require('../index');

describe('testError', function() {
  it('should verify error class', function() {
    const err = new RangeError();
    assert.strictEqual(testError(err, RangeError), true);
    assert.strictEqual(testError(err, TypeError), false);
    assert.strictEqual(testError(err, Error), true);
  });
  it('should verify error message', function() {
    const err = new Error('test message with content');
    assert.strictEqual(testError(err, 'message'), true);
    assert.strictEqual(testError(err, 'Message'), false);
    assert.strictEqual(testError(err, /message/i), true);
    assert.strictEqual(testError(err, /^message/), false);
  });
  it('should verify both class and message', function() {
    const err = new RangeError('with content');
    assert.strictEqual(testError(err, RangeError, 'content'), true);
    assert.strictEqual(testError(err, RangeError, 'message'), false);
    assert.strictEqual(testError(err, TypeError, 'content'), false);
  });
  it('should accept if no constraints provided', function() {
    assert.strictEqual(testError(), true);
    assert.strictEqual(testError('anything'), true);
  });
}); // testError
