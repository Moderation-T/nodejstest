// 事件发射器模块
const EventEmitter = require('events');
const util = require('util'); // 做原型继承 还有很多其他方法
const process = require('process');

// **************** 同步与异步 ********************
// 正常情况下 EventEmitter是同步的 按照他的注册顺序执行
//  我们可以使用 setImmediate() or process.nextTick() methods 将其变成异步的
// setImmediate 把回调放到事件队列的尾部 nextTick 把回调函数放在当前执行栈的底部
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously setImmediate');
  });
});
myEmitter.on('event', (a, b) => {
  process.nextTick(() => {
    console.log('this happens asynchronously nexttick');
  });
});
myEmitter.emit('event', 'a', 'b');
// print
// this happens asynchronously nexttick
// this happens asynchronously setImmediate

// ***************** util.inherits 继承公有属性 EventEmitter.on （emitter.addListener(eventName, listener)一个意思） **************************

function Bell() {}
// Bell 继承 EventEmitter 的公有属性 这样之后Bell才有绑定事件发射时间等方法
util.inherits(Bell, EventEmitter);

// 新建一个bell实例
const bell = new Bell();

// 两个时间发射后的回调函数
function studentIn(name) {
  if (name) {
    console.log(`学生${name}进入教室`);
  }
}
function teacherIn() {
  console.log('教师进入');
}
function sayHi() {
  console.log('hello world');
}

// 绑定事件
bell.on('ring', studentIn);
bell.once('ring', teacherIn); // 只有第一次事件发射时起作用

// 发射事件
bell.emit('ring'); // 1

// emit 之后的参数就作为监听函数的参数
bell.emit('ring', '张三'); // 2

// ***************** 发送错误事件 **************************

const errorEmitter = new MyEmitter();

errorEmitter.on('error', err => {
  console.log('whoops! there was an error');
});

errorEmitter.emit('error', new Error('whoops!'));

// ***************** newListener事件 **************************
// The EventEmitter instance will emit its own 'newListener' event before a listener is added to its internal array of listeners.

const listenerEmitter = new MyEmitter();
// Only do this once so we don't loop forever
listenerEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    listenerEmitter.on('event', () => {
      console.log('我是newListener中的事件');
    });
  }
});
listenerEmitter.on('event', () => {
  console.log('我是监听事件A');
});
listenerEmitter.emit('event');
// Prints:
// 我是newListener中的事件
// 我是监听事件A

// ***************** emitter.off(eventName, listener) （removeListener（）） **************************
// The 'removeListener' event is emitted after the listener is removed.

// ***************** EventEmitter.listenerCount(emitter, eventName) **************************
// emitter.listenerCount(eventName) Returns the number of listeners listening to the event named eventName.
console.log(EventEmitter.listenerCount(bell, 'ring'));
// bell 监听'ring' 的次数 不包括 .once（'ring'）
// Prints: 1

// ***************** EventEmitter.defaultMaxListeners **************************
// By default, a maximum of 10 listeners can be registered for any single event. This limit can be changed for individual EventEmitter instances using the emitter.setMaxListeners(n) method. To change the default for all EventEmitter instances, the EventEmitter.defaultMaxListeners property can be used. If this value is not a positive number, a TypeError will be thrown.
// 默认最大监听数量为 10 可以使用 setMaxListeners 进行修改 可以超过10个

bell.setMaxListeners(bell.getMaxListeners() + 1);
console.log(bell.getMaxListeners());

// ***************** emitter.eventNames() **************************
// 以数据模式返回事件名称

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
