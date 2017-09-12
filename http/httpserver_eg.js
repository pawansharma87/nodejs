//After running this programe hit http://localhost:5000/ from ur browser
var http = require('http');

var server =  http.createServer()

//listioning request
server.listen(5000, (err)=>{
    console.log("Worlds fastest Server is listining on 5000 !!!!!")
})

//this callback is using latest lambada syntax
server.on('request', (request, response)=>{
    console.log("Request arrived");
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write("<H1 style='background-color:green'>Hello from fastest server.</H1>")
    response.end();
    //request.
})



