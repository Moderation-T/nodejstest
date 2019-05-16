var fs = require('fs'); //文件模块
var path = require('path'); //系统路径模块
// var data = require('./treeData.js');
var Z0501 = require('./json/Z0501_IPO科创板发行人基本情况-基本情况.json');
var Z0502 = require('./json/Z0502_IPO科创板发行人基本情况-股本情况.json');
var Z0509 = require('./json/Z0509_IPO科创板发行人基本情况-控股股东.json');
var Z0510 = require('./json/Z0510_IPO科创板发行人基本情况-间接控股股东.json');
var Z0511 = require('./json/Z0511_IPO科创板发行人基本情况-实际控制人.json');
var Z0512 = require('./json/Z0512_IPO科创板发行人基本情况-实际控制人的一致行动人.json');
var Z0514 = require('./json/Z0514_IPO科创板发行人基本情况-员工持股平台.json');
var Z0515 = require('./json/Z0515_IPO科创板发行人基本情况-控股股东、实际控制人股权质押情况.json');
var Z0516 = require('./json/Z0516_IPO科创板发行人基本情况-前十股东.json');
var Z0517 = require('./json/Z0517_IPO科创板发行人基本情况-前十自然人股东及其担任职务.json');
var Z0518 = require('./json/Z0518_IPO科创板发行人基本情况-股东关系.json');
var Z0519 = require('./json/Z0519_IPO科创板发行人基本情况-董事会成员.json');
var Z0520 = require('./json/Z0520_IPO科创板发行人基本情况-监事会成员.json');
var Z0521 = require('./json/Z0521_IPO科创板发行人基本情况-高级管理人员.json');
var Z0522 = require('./json/Z0522_IPO科创板发行人基本情况-核心技术人员.json');
var Z0523 = require('./json/Z0523_IPO科创板发行人基本情况-董监高核薪酬总额.json');
var Z0524 = require('./json/Z0524_IPO科创板发行人基本情况-薪酬情况.json');
var Z0525 = require('./json/Z0525_IPO科创板发行人基本情况-员工情况-专业构成.json');
var Z0526 = require('./json/Z0526_IPO科创板发行人基本情况-员工情况-学历构成.json');
var Z0527 = require('./json/Z0527_IPO科创板发行人基本情况-员工情况-年龄构成.json');

const titles = [
  'IPO科创板发行人基本情况-基本情况',
  'IPO科创板发行人基本情况-股本情况',
  'IPO科创板发行人基本情况-控股股东',
  'IPO科创板发行人基本情况-间接控股股东',
  'IPO科创板发行人基本情况-实际控制人',
  'IPO科创板发行人基本情况-实际控制人的一致行动人',
  'IPO科创板发行人基本情况-员工持股平台',
  'IPO科创板发行人基本情况-控股股东、实际控制人股',
  'IPO科创板发行人基本情况-前十股东',
  'IPO科创板发行人基本情况-前十自然人股东及其担任职务',
  'IPO科创板发行人基本情况-股东关系',
  'IPO科创板发行人基本情况-董事会成员',
  'IPO科创板发行人基本情况-监事会成员',
  'IPO科创板发行人基本情况-高级管理人员',
  'IPO科创板发行人基本情况-核心技术人员',
  'IPO科创板发行人基本情况-董监高核薪酬总额',
  'IPO科创板发行人基本情况-薪酬情况',
  'IPO科创板发行人基本情况-员工情况-专业构成',
  'IPO科创板发行人基本情况-员工情况-学历构成',
  'IPO科创板发行人基本情况-员工情况-年龄构成',
];

const dict = {
  'IPO科创板发行人基本情况-基本情况': Z0501,
  'IPO科创板发行人基本情况-股本情况': Z0502,
  'IPO科创板发行人基本情况-控股股东': Z0509,
  'IPO科创板发行人基本情况-间接控股股东': Z0510,
  'IPO科创板发行人基本情况-实际控制人': Z0511,
  'IPO科创板发行人基本情况-实际控制人的一致行动人': Z0512,
  'IPO科创板发行人基本情况-员工持股平台': Z0514,
  'IPO科创板发行人基本情况-控股股东、实际控制人股': Z0515,
  'IPO科创板发行人基本情况-前十股东': Z0516,
  'IPO科创板发行人基本情况-前十自然人股东及其担任职务': Z0517,
  'IPO科创板发行人基本情况-股东关系': Z0518,
  'IPO科创板发行人基本情况-董事会成员': Z0519,
  'IPO科创板发行人基本情况-监事会成员': Z0520,
  'IPO科创板发行人基本情况-高级管理人员': Z0521,
  'IPO科创板发行人基本情况-核心技术人员': Z0522,
  'IPO科创板发行人基本情况-董监高核薪酬总额': Z0523,
  'IPO科创板发行人基本情况-薪酬情况': Z0524,
  'IPO科创板发行人基本情况-员工情况-专业构成': Z0525,
  'IPO科创板发行人基本情况-员工情况-学历构成': Z0526,
  'IPO科创板发行人基本情况-员工情况-年龄构成': Z0527,
};

const result = titles.map(item => ({
  title: item,
  header: Object.keys(dict[item][0]),
  data: dict[item],
}));

// 把data对象转换为json格式字符串
var content = JSON.stringify(result);

//指定创建目录及文件名称，__dirname为执行当前js文件的目录
var file = path.join(__dirname, 'result/five.json');

//写入文件
fs.writeFile(file, content, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('文件创建成功，地址：' + file);
});
