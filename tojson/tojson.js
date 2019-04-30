var fs = require('fs'); //文件模块
var path = require('path'); //系统路径模块
var data = require('./code_abrvData.js');

// 补零
function fn3(num, length) {
  return (Array(length).join('0') + num).slice(-length);
}

// const newdata = data.map(item => ({ [fn3(item.证券代码, 6).toString()]: item.证券简称 }));
const newdata = data.map(item => ({ [item.证券简称]: fn3(item.证券代码, 6).toString() }));

//把data对象转换为json格式字符串
var content = JSON.stringify(newdata);

//指定创建目录及文件名称，__dirname为执行当前js文件的目录
var file = path.join(__dirname, 'data/test.json');

//写入文件
fs.writeFile(file, content, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('文件创建成功，地址：' + file);
});
