var fs = require('fs')


var isWriteFileOpen = false
var count = 1

var path1 = "./IO_Example/demo.txt"
var path2 = "./IO_Example/weather.txt"

var readStream = new fs.ReadStream(path1)
var writeStream = new fs.WriteStream(path2)
readStream.pipe(writeStream);