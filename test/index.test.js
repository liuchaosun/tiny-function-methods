import assert from 'assert';
// 获取所有的函数模块
import AllFunctions from '../src/test';

let funcList = Object.keys(AllFunctions) || [];

funcList.forEach((func) => {
  /* eslint-disable no-undef */
  let test = AllFunctions[func] && AllFunctions[func].test;
  test(describe, it, assert);
});
