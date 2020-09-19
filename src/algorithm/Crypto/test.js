import Crypto from './function';

import path from 'path';

Crypto.test = function (describe, it, assert) {
  describe(path.join(__dirname, 'function.js'), function () {
    it('', function () {});
  });
};

export default Crypto;
