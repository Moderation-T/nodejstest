// 断言测试模块
const assert = require('assert');

function Sum(a, b) {
  assert(arguments.length == 2, '必须传2个参数');
  assert(typeof a === 'number' && typeof b === 'number', '参数必须为数字');
  return a + b;
}

sum = Sum(1, 2);
console.log(sum);
