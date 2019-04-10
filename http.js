
// 
const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

// 创建服务
const server = http.createServer((req, res) => {
  res.statusCode = 200; // 返回码
  res.setHeader('Content-Type', 'text/plain'); // 设置响应头
  res.end('Hello World!'); // 设置返回
});

// 在本地8080 端口监听服务器
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
