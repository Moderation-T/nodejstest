const express = require('express');
const path = require('path');
const body = require('body-parser');
const cookieParse = require('cookie-parser');
const cookieSession = require('cookie-session');

let server = express();
server.listen(8080);

server.use(body.urlencoded({ extended: false })); // 中间件都使用use引入
server.use(cookieParse());

server.get('/table', (req, res, next) => {
  console.log(1);

  res.send([{ name: 'tang', age: 10 }]);
  res.sendFile(path.resolve('a.txt'));
  next();
});

server.get('/table', (req, res, next) => {
  console.log(2);
});
