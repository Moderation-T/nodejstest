var fs = require('fs'); //文件模块
var path = require('path'); //系统路径模块
// var data = require('./treeData.js');
var Z0301 = require('./json/Z0301_IPO科创板本次发行概况-发行概况（三）.json');
var Z0302 = require('./json/Z0302_IPO科创板本次发行概况-相关机构-保荐人.json');
var Z0303 = require('./json/Z0303_IPO科创板本次发行概况-相关机构-主承销商.json');
var Z0304 = require('./json/Z0304_IPO科创板本次发行概况-相关机构-发行人律师事务所.json');
var Z0305 = require('./json/Z0305_IPO科创板本次发行概况-相关机构-保荐人律师事务所.json');
var Z0306 = require('./json/Z0306_IPO科创板本次发行概况-相关机构-审计机构.json');
var Z0307 = require('./json/Z0307_IPO科创板本次发行概况-相关机构-资产评估机构.json');
var Z0308 = require('./json/Z0308_IPO科创板本次发行概况-相关机构-资产评估复核机构.json');
var Z0309 = require('./json/Z0309_IPO科创板本次发行概况-相关机构-验资机构.json');
var Z0310 = require('./json/Z0310_IPO科创板本次发行概况-其他相关机构.json');

const titles = [
  'IPO科创板本次发行概况-发行概况（三）',
  'IPO科创板本次发行概况-相关机构-保荐人',
  'IPO科创板本次发行概况-相关机构-主承销商',
  'IPO科创板本次发行概况-相关机构-发行人律师事务所',
  'IPO科创板本次发行概况-相关机构-保荐人律师事务所',
  'IPO科创板本次发行概况-相关机构-审计机构',
  'IPO科创板本次发行概况-相关机构-资产评估机构',
  'IPO科创板本次发行概况-相关机构-资产评估复核机构',
  'IPO科创板本次发行概况-相关机构-验资机构',
  'IPO科创板本次发行概况-其他相关机构',
];

const dict = {
  'IPO科创板本次发行概况-发行概况（三）': Z0301,
  'IPO科创板本次发行概况-相关机构-保荐人': Z0302,
  'IPO科创板本次发行概况-相关机构-主承销商': Z0303,
  'IPO科创板本次发行概况-相关机构-发行人律师事务所': Z0304,
  'IPO科创板本次发行概况-相关机构-保荐人律师事务所': Z0305,
  'IPO科创板本次发行概况-相关机构-审计机构': Z0306,
  'IPO科创板本次发行概况-相关机构-资产评估机构': Z0307,
  'IPO科创板本次发行概况-相关机构-资产评估复核机构': Z0308,
  'IPO科创板本次发行概况-相关机构-验资机构': Z0309,
  'IPO科创板本次发行概况-其他相关机构': Z0310,
};

const result = titles.map(item => ({
  title: item,
  header: Object.keys(dict[item][0]),
  data: dict[item],
}));

// 把data对象转换为json格式字符串
var content = JSON.stringify(result);

//指定创建目录及文件名称，__dirname为执行当前js文件的目录
var file = path.join(__dirname, 'result/three.json');

//写入文件
fs.writeFile(file, content, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('文件创建成功，地址：' + file);
});
