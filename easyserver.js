const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/hi':
      fs.readFile(`fs.json`, (err, data) => {
        if (err) {
          res.write(err);
        } else {
          res.write(data);
        }
        res.end();
      });
      break;

    default:
      res.writeHead(404); // 和 res.statusCode = 404; 好像是一样的
      res.end('Not Found');
      break;
  }

  /**
   * 大的数据包会分成小段传输
   * req.on('data',data=>{})  // 有一个端到达了
   * req.on('end',()=>{}) // 所有的传输结束了
   *  */
});

// 在本地8080 端口监听服务器
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const buf = Buffer.from('hello world', 'ascii');

console.log(buf.toString('hex')); // hex 16进制
// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('base64')); // 
// Prints: aGVsbG8gd29ybGQ=

console.log(Buffer.from('fhqwhgads', 'ascii'));
// Prints: <Buffer 66 68 71 77 68 67 61 64 73>
console.log(Buffer.from('fhqwhgads', 'utf16le'));
// Prints: <Buffer 66 00 68 00 71 00 77 00 68 00 67 00 61 00 64 00 73 00>
