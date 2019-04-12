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
  if (err) throw err;
  console.log(ret);
});

// ******************** util.debuglog ************************
// 根据NODE_DEBUG 环境变量来选择性的输出debug信息
process.env.NODE_DEBUG = 'foo';

const debuglog = util.debuglog('foo');

debuglog('hello from foo [%d]', 123);

// ******************** util.format(format[, …args]) ************************
/** 
 * 作用：返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式。
对应的占位符：
    %s - 字符串
    %d - 数值
    %i - Integer
    %f - Float
    %j - JSON
    %o - Object
    %% - 单个百分号（'%'）。不消耗参数。    
*/
console.log(util.format('%s:%d', 'fan', 100)); // print 'fan:100'

// ************ util.inherits(constructor, superConstructor) **************
// 用于继承对象的公有属性 是不被鼓励使用的 
// Usage of util.inherits() is discouraged. Please use the ES6 class and extends keywords to get language level inheritance support


// *************** 没在具体场景使用过 *********************
// util.deprecate(function, string)
