/**
 * 函数防抖: 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
 * 防抖在一段时间内就只触发一次
 * @param {*} fun
 * @param {*} delay
 */
const debounce = function (fun, delay) {
  return function (args) {
    let that = this;
    let _args = args;
    clearTimeout(fun.id);
    fun.id = setTimeout(function () {
      fun.call(that, _args);
    }, delay);
  };
};

export default debounce;
