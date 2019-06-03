// require 加载不到文件是 会先找 circle.js 然后找 circle.json 然后再找 circle.node

// 在node.js中，每个文件都被当做单独的模块
const circle = require('./circle'); // 圆形
const Square = require('./square'); // 方形
// 创建方形实例
const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);
// 调用圆形方法
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

// 只想知道模块的路径 但不想加载这个模块
console.log(require.resolve('./circle'));

console.log(__dirname);
// Prints: /Users/memect/Desktop/practice/back/module
// console.log(path.dirname(__filename));
// Prints: /Users/memect/Desktop/practice/back/module

// 入口模块
console.log(require.main);

// 在node中模块的类型有是那种
// 1. js模块
// 2. json模块
// 3. node C++扩展二进制模块
console.log(require.extensions); //deprecated
