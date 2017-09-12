// This example shows how to craete object of a class

var bank = require('./Account.js')


var acc = new bank.createAccount("Raj kumar")

acc.open()
acc.close()


var acc1 =  bank.createAccount("Pawan Kumar")

acc1.open()
acc1.close()