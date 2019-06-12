const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

// let rs = fs.createReadStream(); // 读取流
// let ws = fs.createWriteStream(); // 写入流

// rs.pipe(ws); // 顺序不能错

let server = http.createServer((req, res) => {
  let rs = fs.createReadStream(`www${req.url}`);

  //rs.pipe(res);

  res.setHeader('content-encoding', 'gzip'); // 告诉浏览器咱是gzip  让他解析

  let gz = zlib.createGzip();
  rs.pipe(gz).pipe(res);

  rs.on('error', err => {
    res.statusCode = 404;
    res.write('Not Found');

    res.end();
  });
});
server.listen(8080);
