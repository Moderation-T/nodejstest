// process 全局变量 所以不需要require
// console.log(process); // 提供了很多的信息

/** process 对象就是一个静态的eventemitter(时间发射器)  */

// Event: 'beforeExit' 在事件循环全部结束后会触发的事件
process.on('beforeExit', exitCode => {
  console.log('beforeExit', exitCode);
});

// Event: 'disconnect'
// If the Node.js process is spawned with an IPC channel (see the Child Process and Cluster documentation), the 'disconnect' event will be emitted when the IPC channel is closed.
// 如果Node.js进程使用IPC通道生成，那么当IPC通道关闭时将发出“断开连接”事件

// Event: 'exit'
process.on('exit', code => {
  console.log(`About to exit with code: ${code}`); // 这里只能执行同步的操作 异步是不被执行的
});

// Event: 'message'
// If the Node.js process is spawned with an IPC channel (see the Child Process and Cluster documentation), the 'message' event is emitted whenever a message sent by a parent process using childprocess.send() is received by the child process.

// The message goes through serialization and parsing. The resulting message might not be the same as what is originally sent.

// Event: 'multipleResolves'

process.on('multipleResolves', (type, promise, reason) => {
  console.error(type, promise, reason);

  setImmediate(() => process.exit(1));
});

async function main() {
  try {
    return await new Promise((resolve, reject) => {
      resolve('First call');
      resolve('Swallowed resolve');
      reject(new Error('Swallowed reject'));
    });
  } catch {
    throw new Error('Failed');
  }
}

main().then(console.log);
// resolve: Promise { 'First call' } 'Swallowed resolve'
// reject: Promise { 'First call' } Error: Swallowed reject
//     at Promise (*)
//     at new Promise (<anonymous>)
//     at main (*)
// First call


// Event: 'rejectionHandled'
// The 'rejectionHandled' event is emitted whenever a Promise has been rejected and an error handler was attached to it (using promise.catch(), for example) later than one turn of the Node.js event loop.


// Event: 'warning'
// The 'warning' event is emitted whenever Node.js emits a process warning.

// A process warning is similar to an error in that it describes exceptional conditions that are being brought to the user's attention. However, warnings are not part of the normal Node.js and JavaScript error handling flow. Node.js can emit warnings whenever it detects bad coding practices that could lead to sub-optimal application performance, bugs, or security vulnerabilities.

process.on('warning', (warning) => {
  console.warn(warning.name);    // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack);   // Print the stack trace
});