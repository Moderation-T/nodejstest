const cluster = require('cluster');

if (cluster.isMaster) {
  // 判断是否是主进程
  // 进程是分裂出来的 并且只有主进程才可以分裂
  cluster.fork();
}
