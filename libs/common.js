// 传入切分字符 然后根据索引 一段一段分

Buffer.prototype.split =
  Buffer.prototype.split ||
  function(b) {
    let arr = [];

    let cur = 0;
    let n = 0;
    while ((n = this.indexOf(b, cur)) != -1) {
      arr.push(this.slice(cur, n));
      cur = n + b.length;
    }

    arr.push(this.slice(cur));

    return arr;
  };
