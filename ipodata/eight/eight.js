var fs = require('fs'); //文件模块
var path = require('path'); //系统路径模块
// var data = require('./treeData.js');
var z0801 = require('./json/Z0801_IPO科创板财务会计信息-审计意见.json');
var z0802 = require('./json/Z0802_IPO资产负债表（合并）.json');
var z0803 = require('./json/Z0803_IPO利润表（合并）.json');
var z0804 = require('./json/Z0804_IPO现金流量表（合并）.json');
var z0805 = require('./json/Z0805_IPO资产负债表（母公司）.json');
var z0806 = require('./json/Z0806_IPO利润表（母公司）.json');
var z0807 = require('./json/Z0807_IPO现金流量表（母公司）.json');
var z0811 = require('./json/Z0811_IPO科创板财务会计信息-净资产收益率和每股收益.json');
var z0812 = require('./json/Z0812_IPO科创板财务会计信息-营业收入的构成情况（区分主营与非主营）.json');
var z0813 = require('./json/Z0813_IPO科创板财务会计信息-营业收入分产品分析.json');
var z0814 = require('./json/Z0814_IPO科创板财务会计信息-营业收入分销售模式分析.json');
var z0815 = require('./json/Z0815_IPO科创板财务会计信息-营业收入分区域分析.json');
var z0816 = require('./json/Z0816_IPO科创板财务会计信息-营业收入季节性分析.json');
var z0817 = require('./json/Z0817_IPO科创板财务会计信息-营业成本构成情况.json');
var z0818 = require('./json/Z0818_IPO科创板财务会计信息-营业成本分产品分析.json');
var z0819 = require('./json/Z0819_IPO科创板财务会计信息-毛利率及收入占比.json');
var z0820 = require('./json/Z0820_IPO科创板财务会计信息-研发费用细分情况.json');
var z0821 = require('./json/Z0821_IPO科创板财务会计信息-研发费用率与同行业公司对比.json');

const titles = [
  'IPO科创板财务会计信息-审计意见',
  'IPO资产负债表（合并）',
  'IPO利润表（合并）',
  'IPO现金流量表（合并）',
  'IPO资产负债表（母公司）',
  'IPO利润表（母公司）',
  'IPO现金流量表（母公司）',
  'IPO科创板财务会计信息-净资产收益率和每股收益',
  'IPO科创板财务会计信息-营业收入的构成情况（区分主营与非主营）',
  'IPO科创板财务会计信息-营业收入分产品分析',
  'IPO科创板财务会计信息-营业收入分销售模式分析',
  'IPO科创板财务会计信息-营业收入分区域分析',
  'IPO科创板财务会计信息-营业收入季节性分析',
  'IPO科创板财务会计信息-营业成本构成情况',
  'IPO科创板财务会计信息-营业成本分产品分析',
  'IPO科创板财务会计信息-毛利率及收入占比',
  'IPO科创板财务会计信息-研发费用细分情况',
  'IPO科创板财务会计信息-研发费用率与同行业公司对比',
];

const dict = {
  'IPO科创板财务会计信息-审计意见': z0801,
  'IPO资产负债表（合并）': z0802,
  'IPO利润表（合并）': z0803,
  'IPO现金流量表（合并）': z0804,
  'IPO资产负债表（母公司）': z0805,
  'IPO利润表（母公司）': z0806,
  'IPO现金流量表（母公司）': z0807,
  'IPO科创板财务会计信息-净资产收益率和每股收益': z0811,
  'IPO科创板财务会计信息-营业收入的构成情况（区分主营与非主营）': z0812,
  'IPO科创板财务会计信息-营业收入分产品分析': z0813,
  'IPO科创板财务会计信息-营业收入分销售模式分析': z0814,
  'IPO科创板财务会计信息-营业收入分区域分析': z0815,
  'IPO科创板财务会计信息-营业收入季节性分析': z0816,
  'IPO科创板财务会计信息-营业成本构成情况': z0817,
  'IPO科创板财务会计信息-营业成本分产品分析': z0818,
  'IPO科创板财务会计信息-毛利率及收入占比': z0819,
  'IPO科创板财务会计信息-研发费用细分情况': z0820,
  'IPO科创板财务会计信息-研发费用率与同行业公司对比': z0821,
};

const result = titles.map(item => ({
  title: item,
  header: Object.keys(dict[item][0]),
  data: dict[item],
}));

// 把data对象转换为json格式字符串
var content = JSON.stringify(result);

//指定创建目录及文件名称，__dirname为执行当前js文件的目录
var file = path.join(__dirname, 'result/eight.json');

//写入文件
fs.writeFile(file, content, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('文件创建成功，地址：' + file);
});
