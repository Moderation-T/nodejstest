const url = require('url');

const urlname = 'https://ke.qq.com/teacher/3383134870?open_source=weibo_search&user=tang';

console.log(url.parse(urlname, true)); // true 就是连query也解析
