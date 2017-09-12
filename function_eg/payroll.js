function hra(salary){
   console.log("HRA : "+ (salary*.30))
}

function da(salary){
   console.log("DA : "+ (salary*.08))
}

exports.calHra=hra
exports.calDa=da