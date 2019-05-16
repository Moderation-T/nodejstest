var fs = require('fs'); //文件模块
var path = require('path'); //系统路径模块
// var data = require('./treeData.js');
var Z0202 = require('./json/Z0202_IPO科创板概览-中介机构列表.json');
var Z0202 = require('./json/Z0203_IPO科创板概览-发行概况（二）.json');
var Z0205 = require('./json/Z0205_IPO科创板概览-发行人选择的上市标准.json');
var Z0206 = require('./json/Z0206_IPO科创板概览-募集资金用途.json');

const titles = [
  'IPO科创板概览-中介机构列表',
  'IPO科创板概览-发行概况（二）',
  'IPO科创板概览-发行人选择的上市标准',
  'IPO科创板概览-募集资金用途',
];

const dict = {
  'IPO科创板概览-中介机构列表': Z0202,
  'IPO科创板概览-发行概况（二）': Z0202,
  'IPO科创板概览-发行人选择的上市标准': Z0205,
  'IPO科创板概览-募集资金用途': Z0206,
};

const result = titles.map(item => ({
  title: item,
  header: Object.keys(dict[item][0]),
  data: dict[item],
}));

// 把data对象转换为json格式字符串
var content = JSON.stringify(result);

//指定创建目录及文件名称，__dirname为执行当前js文件的目录
var file = path.join(__dirname, 'result/two.json');

//写入文件
fs.writeFile(file, content, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('文件创建成功，地址：' + file);
});
