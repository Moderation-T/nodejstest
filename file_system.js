const fs = require('fs');

fs.readFile('fs.json', (err, data) => {
  console.log(err);
  console.log(data); //<Buffer 7b 20 22 6e 61 6d 65 22 3a 20 22 74 61 6e 67 22 20 7d 0a> 数据是个二进制

  fs.writeFile('fs2.json', data, err => {});
});
