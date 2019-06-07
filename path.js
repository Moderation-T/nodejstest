const path = require('path');

// dirname basename extname

const str = '/user/tang/genius/me.png';

console.log(path.dirname(str)); // user/tang/genius
console.log(path.basename(str)); // me.png
console.log(path.extname(str)); // .png
