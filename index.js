'use strict';

exports = module.exports = function testError(err, constructor, msgCheck) {
  if (('function' !== typeof constructor)
      && (undefined === msgCheck)) {
    msgCheck = constructor;
    constructor = undefined;
  }
  if (constructor
      && !(err instanceof constructor)) {
    return false;
  }
  if (msgCheck) {
    if ('string' === typeof msgCheck) {
      return 0 <= err.message.indexOf(msgCheck);
    }
    return msgCheck.test(err.message);
  }
  return true;
}
