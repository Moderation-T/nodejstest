const fs = require('fs');
const http = require('http');

let rs = fs.createReadStream(); // 读取流
let ws = fs.createWriteStream(); // 写入流

rs.pipe(ws); // 顺序不能错
