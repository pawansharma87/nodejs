var fs = require('fs')


var isWriteFileOpen = false
var count = 1

var path1 = "./IO_Example/demo.txt"
var path2 = "./IO_Example/weather.txt"

var readStream = new fs.ReadStream(path1)
var writeStream = new fs.WriteStream(path2)

//we can use either addListener() or on for adding event
//Result will be not sequential It may print in right sequence 

readStream.on('end', function(){
		console.log("File reading reached EOF !!!")
		writeStream.end("File Writing done.")
})

readStream.addListener('open', function(){
	console.log("File reading open done !!!")
})

readStream.addListener('data', function(data){
	console.log("File reading data started : "+count++)
	if(isWriteFileOpen){
		writeStream.write(data.toString())
	}
})

readStream.on('close', function(){
	console.log("File reading close done !!!")
})

readStream.on('error', function(err){
	console.log("Error in readStream processing file.")
	console.log(err.message)
})

writeStream.addListener('open', function(){
	console.log("File writeStream open done !!!")
	isWriteFileOpen = true
})

writeStream.on('close', function(){
	console.log("File writeStream close done !!!")
})

writeStream.on('error', function(err){
	console.log("Error in writeStream processing file.")
	console.log(err.message)
})

console.log("I may print any time because Node js is async")