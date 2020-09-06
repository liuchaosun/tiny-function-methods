import path from 'path';
import fCTU from './function';

fCTU.test = function (describe, it, assert) {
  describe(path.join(__dirname, 'function.js'), function () {
    // 不传第二个参数
    it("('abc') should be Abc", function () {
      assert.equal(fCTU('abc'), 'Abc');
    });
    // 第二个参数为空
    it("('abc-def','') should be Abc-def", function () {
      assert.equal(fCTU('abc-def', ''), 'Abc-def');
    });
    // 第二个参数中间空格
    it("('abc-def',' ') should be Abc-def", function () {
      assert.equal(fCTU('abc-def', ' '), 'Abc-def');
    });
    // 用字母做第二个参数
    it("('abc-def','d') should be abc-Ef", function () {
      assert.equal(fCTU('abc-def', 'd'), 'abc-Ef');
    });
    // 用 - 做第二个参数
    it("('abc-def-gh','-') should be abcDefGh", function () {
      assert.equal(fCTU('abc-def-gh', '-'), 'abcDefGh');
    });
    // 用匹配不到的 / 做第二个参数
    it("('abc-def','/') should be Abc-def", function () {
      assert.equal(fCTU('abc-def', '/'), 'Abc-def');
    });
    // 参数不是字符串
    it("(123,'2') should be -1", function () {
      assert.equal(fCTU(123, 2), '-1');
    });
  });
};

export default fCTU;
