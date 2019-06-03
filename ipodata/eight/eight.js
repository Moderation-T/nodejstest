var fs = require('fs'); //文件模块
var path = require('path'); //系统路径模块
// var data = require('./treeData.js');
var Z0801 = require('./json/Z0801_IPO科创板财务会计信息-审计意见.json');
var Z0802 = require('./json/Z0802_IPO资产负债表（合并）.json');
var Z0803 = require('./json/Z0803_IPO利润表（合并）.json');
var Z0804 = require('./json/Z0804_IPO现金流量表（合并）.json');
var Z0805 = require('./json/Z0805_IPO资产负债表（母公司）.json');
var Z0806 = require('./json/Z0806_IPO利润表（母公司）.json');
var Z0807 = require('./json/Z0807_IPO现金流量表（母公司）.json');
var Z0808 = require('./json/Z0808_IPO科创板财务会计信息-重要会计政策和会计评估');
var Z0811 = require('./json/Z0811_IPO科创板财务会计信息-净资产收益率和每股收益.json');
var Z0812 = require('./json/Z0812_IPO科创板财务会计信息-营业收入的构成情况（区分主营与非主营）.json');
var Z0813 = require('./json/Z0813_IPO科创板财务会计信息-营业收入分产品分析.json');
var Z0814 = require('./json/Z0814_IPO科创板财务会计信息-营业收入分销售模式分析.json');
var Z0815 = require('./json/Z0815_IPO科创板财务会计信息-营业收入分区域分析.json');
var Z0816 = require('./json/Z0816_IPO科创板财务会计信息-营业收入季节性分析.json');
var Z0817 = require('./json/Z0817_IPO科创板财务会计信息-营业成本构成情况.json');
var Z0818 = require('./json/Z0818_IPO科创板财务会计信息-营业成本分产品分析.json');
var Z0819 = require('./json/Z0819_IPO科创板财务会计信息-毛利率及收入占比.json');
var Z0820 = require('./json/Z0820_IPO科创板财务会计信息-研发费用细分情况.json');
var Z0821 = require('./json/Z0821_IPO科创板财务会计信息-研发费用率与同行业公司对比.json');
var Z0822 = require('./json/Z0822_IPO科创板财务会计信息-股份支付概况');

const titles = [
  'Z0801_IPO科创板财务会计信息-审计意见',
  'Z0802_IPO资产负债表（合并）',
  'Z0803_IPO利润表（合并）',
  'Z0804_IPO现金流量表（合并）',
  'Z0805_IPO资产负债表（母公司）',
  'Z0806_IPO利润表（母公司）',
  'Z0807_IPO现金流量表（母公司）',
  'Z0808_IPO科创板财务会计信息-重要会计政策和会计评估',
  'Z0811_IPO科创板财务会计信息-净资产收益率和每股收益',
  'Z0812_IPO科创板财务会计信息-营业收入的构成情况（区分主营与非主营）',
  'Z0813_IPO科创板财务会计信息-营业收入分产品分析',
  'Z0814_IPO科创板财务会计信息-营业收入分销售模式分析',
  'Z0815_IPO科创板财务会计信息-营业收入分区域分析',
  'Z0816_IPO科创板财务会计信息-营业收入季节性分析',
  'Z0817_IPO科创板财务会计信息-营业成本构成情况',
  'Z0818_IPO科创板财务会计信息-营业成本分产品分析',
  'Z0819_IPO科创板财务会计信息-毛利率及收入占比',
  'Z0820_IPO科创板财务会计信息-研发费用细分情况',
  'Z0821_IPO科创板财务会计信息-研发费用率与同行业公司对比',
  'Z0822_IPO科创板财务会计信息-股份支付概况',
];

const dict = {
  'Z0801_IPO科创板财务会计信息-审计意见': Z0801,
  'Z0802_IPO资产负债表（合并）': Z0802,
  'Z0803_IPO利润表（合并）': Z0803,
  'Z0804_IPO现金流量表（合并）': Z0804,
  'Z0805_IPO资产负债表（母公司）': Z0805,
  'Z0806_IPO利润表（母公司）': Z0806,
  'Z0807_IPO现金流量表（母公司）': Z0807,
  'Z0808_IPO科创板财务会计信息-重要会计政策和会计评估': Z0808,
  'Z0811_IPO科创板财务会计信息-净资产收益率和每股收益': Z0811,
  'Z0812_IPO科创板财务会计信息-营业收入的构成情况（区分主营与非主营）': Z0812,
  'Z0813_IPO科创板财务会计信息-营业收入分产品分析': Z0813,
  'Z0814_IPO科创板财务会计信息-营业收入分销售模式分析': Z0814,
  'Z0815_IPO科创板财务会计信息-营业收入分区域分析': Z0815,
  'Z0816_IPO科创板财务会计信息-营业收入季节性分析': Z0816,
  'Z0817_IPO科创板财务会计信息-营业成本构成情况': Z0817,
  'Z0818_IPO科创板财务会计信息-营业成本分产品分析': Z0818,
  'Z0819_IPO科创板财务会计信息-毛利率及收入占比': Z0819,
  'Z0820_IPO科创板财务会计信息-研发费用细分情况': Z0820,
  'Z0821_IPO科创板财务会计信息-研发费用率与同行业公司对比': Z0821,
  'Z0822_IPO科创板财务会计信息-股份支付概况': Z0822,
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
