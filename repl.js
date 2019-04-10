const repl = require('repl'); // node运行环境 read eval print loop
// 不是很常用的模块 简单看了一下

// ******************** .editor ************************
// 可以直接使用.editor 在node 中进行编辑
// ^D to finish, ^C to cancel

/**
 > .editor
// Entering editor mode (^D to finish, ^C to cancel)
function welcome(name) {
  return `Hello ${name}!`;
}

welcome('Node.js User');

// ^D
'Hello Node.js User!'
>
 *  */

// ******************** 表达式 ************************

/**
 > 1 + 1
2
> const m = 2
undefined
> m + 1
3
 *  */

// ******************** Global and Local Scope ************************

// 获取环境上下文
const context = repl.start().context;
// 局部变量msg
const msg = 'Hello World';
// 使得可以在全局调用msg
context.msg = msg;

// ******************** `_` & _error ************************
/** 
 > [ 'a', 'b', 'c' ]
[ 'a', 'b', 'c' ]
> _.length
3
> _ += 1
Expression assignment to _ now disabled.
4
> 1 + 1
2
> _
4
*/

/** 
> throw new Error('foo');
Error: foo
> _error.message
'foo'
*/
