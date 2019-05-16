// process.nextTick 把回调函数放在当前执行栈的底部
console.log('start');
process.nextTick(() => {
  console.log('nextTick callback');
});
console.log('scheduled');
// Output:
// start
// scheduled
// nextTick callback

// This is important when developing APIs in order to give users the opportunity to assign event handlers after an object has been constructed but before any I/O has occurred: 在开发api时 让用户有机会触发时间在构造函数执行后 I/O 前

function Clock() {
  this.listen; // 返回这个方法
  process.nextTick(() => {
    // 如果不使用这个方法 直接执行会报错 因为此时listen还是undefined
    this.listen(); // 然后执行
  });
}

Clock.prototype.add = function(listener) {
  this.listen = listener;
};

let clo = new Clock();

clo.add(() => {
  console.log('ok');
});
