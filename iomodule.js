var fs = require('fs')


function handleData(){
	console.log("File content is here !!!")
}

function printData(err, content){
	
	if(err){
		console.log("Error in reading file")
		throw err
	}
	console.log("File content is here !!!")
	// default type of any file data is binary if you want in txt use toString
	console.log(content)
	console.log(content.toString())
	console.log("File content reading done !!!")
}


var path = "/Users/pawankumar/node_poc/demo.txt"

//method without data printing

fs.readFile(path,handleData)
//printing data in method
fs.readFile(path,printData)

