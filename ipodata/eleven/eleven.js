var fs = require('fs'); //文件模块
var path = require('path'); //系统路径模块
// var data = require('./treeData.js');
var Z1101 = require('./json/Z1101_IPO科创板其他重要事项-对外担保情况.json');
var Z1102 = require('./json/Z1102_IPO科创板其他重要事项-重大诉讼.json');
var Z1103 = require('./json/Z1103_IPO科创板其他重要事项-涉及违法情况.json');
var Z1104 = require('./json/Z1104_IPO科创板其他重要事项-董监高核涉及立案情况.json');

const titles = [
  'Z1101_IPO科创板其他重要事项-对外担保情况',
  'Z1102_IPO科创板其他重要事项-重大诉讼',
  'Z1103_IPO科创板其他重要事项-涉及违法情况',
  'Z1104_IPO科创板其他重要事项-董监高核涉及立案情况',
];

const dict = {
  'Z1101_IPO科创板其他重要事项-对外担保情况': Z1101,
  'Z1102_IPO科创板其他重要事项-重大诉讼': Z1102,
  'Z1103_IPO科创板其他重要事项-涉及违法情况': Z1103,
  'Z1104_IPO科创板其他重要事项-董监高核涉及立案情况': Z1104,
};

const result = titles.map(item => ({
  title: item,
  header: Object.keys(dict[item][0]),
  data: dict[item],
}));

// 把data对象转换为json格式字符串
var content = JSON.stringify(result);

//指定创建目录及文件名称，__dirname为执行当前js文件的目录
var file = path.join(__dirname, 'result/eleven.json');

//写入文件
fs.writeFile(file, content, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('文件创建成功，地址：' + file);
});
