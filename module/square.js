// assigning to exports will not modify module, must use module.exports
// 向外暴露一个Square 类
module.exports = class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};
