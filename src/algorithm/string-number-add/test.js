/**
 * 单元测试用例
 */
import path from 'path';
import stringNumberAdd from './function';

stringNumberAdd.test = function (describe, it, assert) {
  describe(path.join(__dirname, 'function.js'), function () {
    // 异常 返回 -1
    it("1 + '9999' --> '-1'", function () {
      assert.equal(stringNumberAdd(1, '9999'), '-1');
    });
    it("1 , underfind --> '-1'", function () {
      assert.equal(stringNumberAdd(1), '-1');
    });
    // 正常情况
    it("'1' + '1' --> ’2‘", function () {
      assert.equal(stringNumberAdd('1', '1'), '2');
    });
    it("'1' + '9999' --> '10000'", function () {
      assert.equal(stringNumberAdd('1', '9999'), '10000');
    });
  });
};

export default stringNumberAdd;
