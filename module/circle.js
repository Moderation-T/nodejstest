const { PI } = Math;
// 圆形面积 向外暴露函数area
exports.area = r => PI * r ** 2;
// 圆形周长 向外暴露函数circumference
exports.circumference = r => 2 * PI * r;
