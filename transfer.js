// 将 Unicode 码转成 utf-8
const transfer = () => {};

// 0x 16进制
// unicode 码都是16进制 每个汉字对应三个字节
let r = transfer(0x4e07);

console.log(Buffer.from('万'));
