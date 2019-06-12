// post 上传 二进制文件上传处理

const http = require('http');
const common = require('./libs/common');
const fs = require('fs');
const uuid = require('uuid/v4');

let server = http.createServer((req, res) => {
  let arr = [];

  req.on('data', data => {
    arr.push(data);
  });
  req.on('end', () => {
    let data = Buffer.concat(arr); // 连接 buffer 数据

    //data
    //解析二进制文件上传数据
    let post = {};
    let files = {};
    if (req.headers['content-type']) {
      // multipart/form-data; boundary=----WebKitFormBoundary4s3adHlXYxwMqQBG
      let str = req.headers['content-type'].split('; ')[1];

      if (str) {
        let boundary = '--' + str.split('=')[1]; // 得到分隔符

        /**
         * 1.用"分隔符切分整个数据" 得到
         * [
            空,
            \r\n数据描述\r\n\r\n数据值\r\n,
            \r\n数据描述\r\n\r\n数据值\r\n,
            \r\n数据描述1\r\n数据描述2\r\n\r\n<文件内容>\r\n,
            --\r\n
          ]
         *  */

        let arr = data.split(boundary);

        /**
         * 2.丢弃头尾两个数据
         * [
            \r\n数据描述\r\n\r\n数据值\r\n,
            \r\n数据描述\r\n\r\n数据值\r\n,
            \r\n数据描述1\r\n数据描述2\r\n\r\n<文件内容>\r\n,
          ]
       *  */
        arr.shift();
        arr.pop();

        /**
         * 3.丢弃掉每个数据头尾的"\r\n"
         * [
            数据描述\r\n\r\n数据值,
            数据描述\r\n\r\n数据值,
            数据描述1\r\n数据描述2\r\n\r\n<文件内容>,
          ]
       *  */
        arr = arr.map(buffer => buffer.slice(2, buffer.length - 2));

        /**
         * 4.每个数据在第一个"\r\n\r\n"处切成两半
         * [
            数据描述 数据值,
            数据描述 数据值,
            数据描述1\r\n数据描述2 <文件内容>,
          ]
       *  */
        arr.forEach(buffer => {
          let n = buffer.indexOf('\r\n\r\n'); // 第一个出现的 \r\n\r\n 的索引

          let disposition = buffer.slice(0, n); // 根据索引切分 这是数据描述部分
          let content = buffer.slice(n + 4); // 根据索引切分 这是数据值部分

          disposition = disposition.toString(); // 数据描述肯定是文字 放心转换就行

          if (disposition.indexOf('\r\n') == -1) {
            // 分隔之后描述中再没有 '\r\n' 就是普通数据
            //普通数据
            //Content-Disposition: form-data; name="user"
            content = content.toString(); // 普通数据内容就可以放心转文字了

            // disposition：
            // Content-Disposition: form-data; name="user"
            // Content-Disposition: form-data; name="pass"
            let name = disposition.split('; ')[1].split('=')[1]; // 获取字段的key
            name = name.substring(1, name.length - 1); // 不要引号

            post[name] = content; // 普通数据放入post里
          } else {
            //文件数据
            /*Content-Disposition: form-data; name="f1"; filename="a.txt"\r\n
            Content-Type: text/plain*/
            let [line1, line2] = disposition.split('\r\n');
            // line1 Content-Disposition: form-data; name="f1"; filename="a.txt"
            // line2 Content-Type: text/plain
            let [, name, filename] = line1.split('; ');
            let type = line2.split(': ')[1];

            name = name.split('=')[1];
            name = name.substring(1, name.length - 1);

            filename = filename.split('=')[1];
            filename = filename.substring(1, filename.length - 1);

            let path = `upload/${uuid().replace(/\-/g, '')}`;

            fs.writeFile(path, content, err => {
              if (err) {
                console.log('文件写入失败', err);
              } else {
                files[name] = { filename, path, type };
                console.log(files);
              }
            });
          }
        });

        //5.完成
        console.log(post);
      }
    }

    res.end();
  });
});
server.listen(8080);
