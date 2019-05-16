var fs = require('fs'); //文件模块
var path = require('path'); //系统路径模块
var data = require('./treeData.js');

// const newdata = data.map(item => ({ [item.证券简称]: item.证券代码.toString() }));
// const newData data.map(item=>{
//   if (item.children) {
//     return [item.nodeName,...item.children.map(_item=>item.nodeName)]
//   }
//   return item.nodeName
// })
// console.log(newData);

const newData = [];

for (let i = 0; i < data.length; i++) {
  if (data[i].children) {
    newData.push(data[i].children.map(item => item.nodeName));
  }
}

console.log(newData);

// 把data对象转换为json格式字符串
var content = JSON.stringify(newData);

//指定创建目录及文件名称，__dirname为执行当前js文件的目录
var file = path.join(__dirname, 'data/test1.json');

//写入文件
fs.writeFile(file, content, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('文件创建成功，地址：' + file);
});
