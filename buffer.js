/*
 * 什么是buffer？
 暂时存放输入输出数据的一段内存
 Buffer对象提供对二进制数据的操作
 是一个表示固定内存分配的全局对象，也就是说要放到缓存区中的字节数需要提前确定
 buffer好比由一个8位字节元素组成的数组，可以有效的在js中表示二进制数据
 */

//  分配一个长度为10个字节的Buffer
//  会把所有的字节设置为0

// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);
console.log(buf1);

// Creates a Buffer of length 10, filled with 0x1.
const buf2 = Buffer.alloc(10, 1);
console.log(buf2);

// Creates an uninitialized buffer of length 10.
// This is faster than calling Buffer.alloc() but the returned
// Buffer instance might contain old data that needs to be
// overwritten using either fill() or write().
// 分配一个没有初始化的buffer
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

// Creates a Buffer containing [0x1, 0x2, 0x3].
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);

// Creates a Buffer containing UTF-8 bytes [0x74, 0xc3, 0xa9, 0x73, 0x74].
const buf5 = Buffer.from('tést');
console.log(buf5);

// Creates a Buffer containing Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
const buf6 = Buffer.from('tést', 'latin1');
console.log(buf6);

// 1. 填充的值 2. 爱你冲的开始索引 3. 结束索引
buf1.fill(3, 1, 3);
console.log(buf1);

// 1. 写的字符串 2. 填充开始的索引 3. 填充字节的长度 4. 编码
buf1.write('唐', 0, 3, 'utf8');
console.log(buf1);
console.log(buf1.toString());

// 向指定索引写入一个八位的整数
// buf.writeInt8(value, offset);
buf1.writeInt8(32, 0);
console.log(buf1);
// BE —— Big Endian 大头在前
// LE —— Little Indian 小头在前
// 16位两个字节
buf1.writeInt16BE();

/**
 * string.decoder
 * 他的出现是为了解决乱码问题
 */

//  concat 连接buffer
