var fs = require('fs')


var path1 = "/Users/pawankumar/node_poc/demo.txt"

var readStream = new fs.ReadStream(path1)

//we can use either addListener() or on for adding event
//Result will be not sequential It may print in right sequence 

readStream.on('end', function(){
		console.log("File reached EOF !!!")
})


readStream.addListener('open', function(){
		console.log("File open done !!!")
})

readStream.addListener('data', function(data){
		console.log("File data done !!!"+ data.toString())
})

readStream.on('close', function(){
		console.log("File close done !!!")
})

readStream.on('error', function(err){
		console.log("Error in processing file.")
		console.log(err.message)
})

console.log("I may print any time because Node js is async")