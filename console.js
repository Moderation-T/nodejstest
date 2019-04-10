console.time('time');

console.log('在控制输出日志');
console.debug('在控制输出日志'); // 和console.log() 一个东西
console.info('在控制输出日志'); // 和console.log() 一个东西
console.error('输出错误');
console.warn('输出警告');
console.assert(1 == 1, '执行成功不输出啥');
console.assert(1 == 2, '执行失败');

// When stdout is a TTY, calling console.clear() will attempt to clear the TTY. When stdout is not a TTY, this method does nothing. 统计输出次数
// console.clear(); // 清空输出
console.count('在控制输出日志'); // print 1
console.count('在控制输出日志'); // print 2
console.count('在控制输出日志'); // print 3
console.count('abc'); // print 1
console.countReset('在控制输出日志'); // 重置输出次数
console.count('在控制输出日志'); // print 1

// These can't be parsed as tabular data
console.table(Symbol());
// Symbol()

console.table(undefined);
// undefined

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);
// ┌─────────┬─────┐
// │ (index) │  a  │
// ├─────────┼─────┤
// │    0    │  1  │
// │    1    │ 'Z' │
// └─────────┴─────┘

// 与最上方的console.time 配合输出时间差
console.timeLog('time'); // print time: 24.036ms
console.timeEnd('time'); // print time: 26.516ms

// 跟踪当前代码的调用栈
console.trace('Show me');
// Prints: (stack trace will vary based on where trace is called)
//  Trace: Show me
//    at repl:2:9
//    at REPLServer.defaultEval (repl.js:248:27)
//    at bound (domain.js:287:14)
//    at REPLServer.runBound [as eval] (domain.js:300:12)
//    at REPLServer.<anonymous> (repl.js:412:12)
//    at emitOne (events.js:82:20)
//    at REPLServer.emit (events.js:169:7)
//    at REPLServer.Interface._onLine (readline.js:210:10)
//    at REPLServer.Interface._line (readline.js:549:8)
//    at REPLServer.Interface._ttyWrite (readline.js:826:14)

// 没在具体场景用呢 不知道是个什么效果
console.dir(); // 可以列出对象的结构
console.dirxml('1'); // print 1

console.group(['A', 'B', 'C']);
console.groupEnd(['A', 'B', 'C']);

console.profile('MyLabel');
// Some code
console.profileEnd('MyLabel');
// Adds the profile 'MyLabel' to the Profiles panel of the inspector.

// console.timeStamp('timer');
// console.timeline('timer');
// console.timelineEnd('timer');
