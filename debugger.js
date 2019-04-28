const a = 1;
debugger;
console.log(a);
const b = 2;
console.log(b);
const c = a + b;
console.log(c);

// node inspect debugger.js 进入debug模式

/**
 * n / next 下一步
 * s / step 进入这一步
 * c / cont 继续执行
 * o /out 输出这一步
 * pause 暂停执行
 *  */

//  watchers
/**
 * It is possible to watch expression and variable values while debugging. On every breakpoint, each expression from the watchers list will be evaluated in the current context and displayed immediately before the breakpoint's source code listing.

To begin watching an expression, type watch('my_expression'). The command watchers will print the active watchers. To remove a watcher, type unwatch('my_expression').
 */
