var express = require('express')

var server = express();

server.get('/politician', (req,res)=>{
    res.json({"id":"1000","name":"Lalu","frauds":"400","assets":"40000cr"});
    res.end();
})

server.get('/politician1', (req,res)=>{
    res.writeHead(200,{'Content-Type':'application/xml'})
    res.write("<politician><id>1000</id><name>Lalu</name><frauds>400</frauds><assets>40000cr</assets></politician>")
    res.end();
})

//listioning request
server.listen(5000, (err)=>{
    console.log("Worlds fastest Server is listining on 5000 !!!!!")
})