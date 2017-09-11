var fs = require('fs')


function handleHoliday(err, content){
if(err){
		console.log("Error in reading file")
		throw err
	}
	console.log("File content is here !!!")
	// default type of any file data is binary if you want in txt use toString
	console.log(content.toString())
	console.log("File Holiday content reading done !!!")
}

function printMovie(err, content){
	
	if(err){
		console.log("Error in reading file")
		throw err
	}
	console.log("File content is here !!!")
	// default type of any file data is binary if you want in txt use toString
	console.log(content.toString())
	console.log("File Movie content reading done !!!")
}


var path1 = "/Users/pawankumar/node_poc/demo.txt"

var path2 = "/Users/pawankumar/node_poc/test.txt"

//method without data printing

fs.readFile(path1,handleHoliday)
console.log("Check point 1")
//printing data in method
fs.readFile(path2,printMovie)
console.log("Start writing in file")

fs.writeFile(path1,"This is output from ls command in file",function(err){
	if(err){
		console.log("Error in writing file")
		throw err
	}
	console.log("File writing done")
})

fs.readFile(path1,handleHoliday)



//20 loc business logic

