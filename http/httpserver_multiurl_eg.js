//After running this programe hit http://localhost:5000/my.html?city=pune&day=10 from ur browser
var http = require('http');

var fs = require('fs');

//This api to play with url like parsing parameters and url etc
var url = require('url');

var server =  http.createServer()

//listioning request
server.listen(5000, (err)=>{
    console.log("Worlds fastest Server is listining on 5000 !!!!!")
})

//this callback is using latest lambada syntax
server.on('request', (request, response)=>{
    console.log("Request arrived");
    console.log(request.url)
    //console.log(url.parse(request.url))
    var urlObj = url.parse(request.url);
    console.log(urlObj.pathname)
    console.log(urlObj.query)
    console.log(request.connection.remoteAddress)

    var ip = request.socket.remoteAddress;
    console.log(ip)

    response.writeHead(200,{'Content-Type':'text/html'})
    //This code will do url bases return
    if(urlObj.pathname.indexOf("my.html") > -1){
        response.write("<H1 style='background-color:green'>Welcome!</H1>")
    }else if(urlObj.pathname.indexOf("play.html") > -1){
        response.write("<H1 style='background-color:yellow'>No game is running....</H1>")
    }else if(urlObj.pathname.indexOf("index.html") > -1){
       // var content = fs.readFileSync('./index.html')
        //response.write(content)
    }else if(urlObj.pathname.indexOf("product.html") > -1){
        //var content = fs.readFileSync('./product.html')
        //response.write(content)
    }
    response.end();
    //request.
})



