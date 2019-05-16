var fs = require('fs'); //文件模块
var path = require('path'); //系统路径模块
// var data = require('./treeData.js');
var Z0101 = require('./json/Z0101_IPO科创板扉页-发行概况.json');
var Z0102 = require('./json/Z0102_IPO科创板扉页-重大事项提示.json');

const titles = ['IPO科创板财务会计信息-审计意见', 'IPO资产负债表（合并）'];

const dict = {
  'IPO科创板财务会计信息-审计意见': Z0101,
  'IPO资产负债表（合并）': Z0102,
};

const result = titles.map(item => ({
  title: item,
  header: Object.keys(dict[item][0]),
  data: dict[item],
}));

// 把data对象转换为json格式字符串
var content = JSON.stringify(result);

//指定创建目录及文件名称，__dirname为执行当前js文件的目录
var file = path.join(__dirname, 'result/one.json');

//写入文件
fs.writeFile(file, content, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('文件创建成功，地址：' + file);
});
