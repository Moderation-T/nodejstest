// error-first的回调
// 确实有两个规则用来定义一个error-first的回调：

// 第一个参数必须是error对象。如果发生了错误，第一个错误通过第一个参数返回
// 第二个参数用来传递成功响应的数据。 如果没有发生错误，那么error参数会被设置为null来传递，而成功的响应数据通过第二个参数返回。

const util = require('util');
const process = require('process');

// ******************** util.callbackify ************************
// async 输出的是Promise
async function fn() {
  return 'hello world';
}

// util的callbackify方法与promisify刚好相反，callbackify用于把async（或者返回promise）的函数转换成遵从error-first回调风格的类型
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  console.log(err, ret);

  if (err) throw err;
  console.log(ret);
});

// ******************** util.debuglog ************************
// 根据NODE_DEBUG 环境变量来选择性的输出debug信息
process.env.NODE_DEBUG = 'foo';

const debuglog = util.debuglog('foo');

debuglog('hello from foo [%d]', 123);
