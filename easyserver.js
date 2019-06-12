const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  /** 实验表单 post 上传如何获得数据的*/
  // req.on('data', data => {
  //   const msg = querystring.parse(data.toString());
  //   const { user, pwd } = msg;
  //   console.log(user, pwd); // post 得到用户和密码
  // }); // 有一个端到达了
  // req.on('end', () => {}); // 所有的传输结束了

  // 模仿 api 请求
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
