const http = require('http');
const mysql = require('mysql');

// 1. 链接数据库 创建数据库对象
let myDB = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'node_learn_20190614',
});

// 2. 与服务器的交互 query  是异步操作
// bd.query(sql,(err,data)=>{s})

// 增
// myDB.query(`INSERT INTO student_table (ID,name) VALUES (0,'WANG');`, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// 删
// myDB.query(`DELETE FROM student_table WHERE ID=1;`, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// 改
// myDB.query(`UPDATE student_table SET chinese=150,math=150 WHERE ID=3;`, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// 查
