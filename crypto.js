const crypto = require('crypto');

let obj = crypto.createHash('md5'); // 告诉她签名算法到底是哪种 md5 sha1

obj.update('123'); // 往里边堆东西
obj.update('555'); // 可以堆好几次
obj.update('098');

console.log(obj.digest('hex')); // 算出来的结果用digest的形式诚信啊 hex16进制的意思
