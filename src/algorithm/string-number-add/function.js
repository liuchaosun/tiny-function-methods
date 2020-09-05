/**
 * 整数字符串数字相加，解决数字长度超限问题
 * 目前只支持正整数
 * @param first 字符串整数
 * @param last 字符串整数
 */
const stringNumberAdd = function (first, last) {
  if (typeof first !== 'string' || typeof last !== 'string') {
    return '-1';
  }
  let flen = first.length - 1;
  let llen = last.length - 1;

  let total = '';
  let carry = 0;
  while (flen >= 0 || llen >= 0) {
    let ftmp = 0;
    let ltmp = 0;
    let sum = 0;
    if (flen >= 0) {
      ftmp = parseInt(first[flen]);
      flen--;
    }
    if (llen >= 0) {
      ltmp = parseInt(last[llen]);
      llen--;
    }
    // ftmp + ltmp 当前位求和， 考虑可能有进位 + carry
    sum = ftmp + ltmp + carry;

    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    } else {
      carry = 0;
    }

    total = sum + total;
  }
  if (carry > 0) {
    total = '1' + total;
  }

  return total;
};

export default stringNumberAdd;
