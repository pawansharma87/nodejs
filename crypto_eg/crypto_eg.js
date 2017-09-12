// This is the example how crypto module work in node

var crypto = require('crypto');

var plainText = " Account balance is $4000000 million."
var hash = crypto.createHash('sha512')

hash.update(plainText)
var digest = hash.digest()

console.log("Plain Text is : "+ plainText)
console.log("Digest text is : "+ digest)