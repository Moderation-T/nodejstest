var fs = require('fs'); //文件模块
var path = require('path'); //系统路径模块
// var data = require('./treeData.js');

var Z0702 = require('./json/Z0702_IPO科创板公司治理与独立性-发行人协议控制架构情况.json');

const titles = ['Z0702_IPO科创板公司治理与独立性-发行人协议控制架构情况'];

const dict = {
  'Z0702_IPO科创板公司治理与独立性-发行人协议控制架构情况': Z0702,
};

const result = titles.map(item => ({
  title: item,
  header: Object.keys(dict[item][0]),
  data: dict[item],
}));

// 把data对象转换为json格式字符串
var content = JSON.stringify(result);

//指定创建目录及文件名称，__dirname为执行当前js文件的目录
var file = path.join(__dirname, 'result/seven.json');

//写入文件
fs.writeFile(file, content, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('文件创建成功，地址：' + file);
});
