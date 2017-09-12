var cal=require('./cal.js')
var payroll = require('./payroll.js') 

console.log(cal.title)
cal.doSum(10,4)
cal.doDiff(10,4)
cal.doMultiply(10,4)
cal.doDiv(10,4)


payroll.calHra(120000)
payroll.calDa(120000)