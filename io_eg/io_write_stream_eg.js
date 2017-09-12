var fs = require('fs')


var path1 = "./IO_Example/weather.txt"

var writeStream = new fs.WriteStream(path1)

//we can use either addListener() or on for adding event
//Result will be not sequential It may print in right sequence 

writeStream.on('finish', function(){
		console.log("File reached EOF !!!")
})


writeStream.addListener('open', function(){
		console.log("File open done !!!")
		writeStream.write("Weather is very cool outside!.")
		
		//writeStream.end()
		//or
		writeStream.end("Enjoy your day!")
})


writeStream.on('close', function(){
		console.log("File close done !!!")
})

writeStream.on('error', function(err){
		console.log("Error in processing file.")
		console.log(err.message)
})

console.log("I may print any time because Node js is async")