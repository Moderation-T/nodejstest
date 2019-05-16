var fs = require('fs'); //文件模块
var path = require('path'); //系统路径模块
// var data = require('./treeData.js');
var Z0601 = require('./json/Z0601_IPO科创板业务与技术-主要产品及业务的收入情况.json');
var Z0602 = require('./json/Z0602_IPO科创板业务与技术-前五客户.json');
var Z0603 = require('./json/Z0603_IPO科创板业务与技术-前五供应商.json');
var Z0604 = require('./json/Z0604_IPO科创板业务与技术-专利.json');
var Z0605 = require('./json/Z0605_IPO科创板业务与技术-软件著作权.json');
var Z0606 = require('./json/Z0606_IPO科创板业务与技术-主要核心技术.json');
var Z0607 = require('./json/Z0607_IPO科创板业务与技术-核心技术产品占营业收入比例.json');
var Z0612 = require('./json/Z0612_IPO科创板业务与技术-研发费用与营业收入比例.json');
var Z0613 = require('./json/Z0613_IPO科创板业务与技术-研发人员数量.json');

const titles = [
  'IPO科创板业务与技术-前五客户',
  'IPO科创板业务与技术-前五供应商',
  'IPO科创板业务与技术-专利',
  'IPO科创板业务与技术-软件著作权',
  'IPO科创板业务与技术-主要核心技术',
  'IPO科创板业务与技术-核心技术产品占营业收入比例',
  'IPO科创板业务与技术-研发费用与营业收入比例',
  'IPO科创板业务与技术-研发人员数量',
];

const dict = {
  'IPO科创板业务与技术-前五客户': Z0602,
  'IPO科创板业务与技术-前五供应商': Z0603,
  'IPO科创板业务与技术-专利': Z0604,
  'IPO科创板业务与技术-软件著作权': Z0605,
  'IPO科创板业务与技术-主要核心技术': Z0606,
  'IPO科创板业务与技术-核心技术产品占营业收入比例': Z0607,
  'IPO科创板业务与技术-研发费用与营业收入比例': Z0612,
  'IPO科创板业务与技术-研发人员数量': Z0613,
};

const result = titles.map(item => ({
  title: item,
  header: Object.keys(dict[item][0]),
  data: dict[item],
}));

// 把data对象转换为json格式字符串
var content = JSON.stringify(result);

//指定创建目录及文件名称，__dirname为执行当前js文件的目录
var file = path.join(__dirname, 'result/six.json');

//写入文件
fs.writeFile(file, content, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('文件创建成功，地址：' + file);
});
