var title= "Node JS POC"
function sum(a,b){
   console.log("SUM : "+ (a+b))
}

function diff(a,b){
   console.log("Diff : "+ (a-b))
}


function multiply(a,b){
   console.log("Multiply : "+ (a*b))
}


function info(){
   console.log("This module will do all calculation")
}

exports.title =title
exports.doSum=sum
exports.doDiff=diff
exports.doMultiply=multiply
exports.doDiv = function (a,b){
   console.log("Div : "+ (a/b))
}