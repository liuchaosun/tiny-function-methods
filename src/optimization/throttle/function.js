/**
 * 函数节流: 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
 * @param {*} fun
 * @param {*} delay
 */
const throttle = function (fun, delay) {
  let last, deferTimer;
  return function () {
    let that = this;
    let _args = arguments;
    let now = new Date();
    if (last && now < last + delay) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fun.apply(that, _args);
      }, delay);
    } else {
      last = now;
      fun.apply(that, _args);
    }
  };
};
export default throttle;
