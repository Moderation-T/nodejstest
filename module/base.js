// 在node.js中，每个文件都被当做单独的模块
const circle = require('./circle'); // 圆形
const Square = require('./square'); // 方形
// 创建方形实例
const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);

console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
