import path from 'path';
import crypto from './function';

crypto.test = function (describe, it, assert) {
  describe(path.join(__dirname, 'function.js'), function () {
    // 异常
    it('crypto.encrypt() === -1', function () {
      assert.equal(crypto.encrypt(), -1);
    });
    it('crypto.encrypt(123456) === -1', function () {
      assert.equal(crypto.encrypt(123456), -1);
    });
    // 正常
    it("crypto.encrypt('123456') === '8WQd5BCd6F+la0xMCbl0uA=='", function () {
      assert.equal(crypto.encrypt('123456'), '8WQd5BCd6F+la0xMCbl0uA==');
    });
    it("crypto.decrypt('8WQd5BCd6F+la0xMCbl0uA==') === '123456'", function () {
      assert.equal(crypto.decrypt('8WQd5BCd6F+la0xMCbl0uA=='), '123456');
    });
    // 新的 key
    it("crypto.encrypt('123456','789456123zxcvbnm') === 'lNDyaQ3De8N/uNTsopvvgA=='", function () {
      assert.equal(crypto.encrypt('123456', '789456123zxcvbnm'), 'lNDyaQ3De8N/uNTsopvvgA==');
    });
    it("crypto.decrypt('lNDyaQ3De8N/uNTsopvvgA==','789456123zxcvbnm') === '123456'", function () {
      assert.equal(crypto.decrypt('lNDyaQ3De8N/uNTsopvvgA==', '789456123zxcvbnm'), '123456');
    });
  });
};

export default crypto;
