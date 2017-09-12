// This is the example how crypto module work in node for encrption and decryption

var crypto = require('crypto');

var plainText = " Account balance is $4000000 million."

var chiper = crypto.createCipher('AES192','secret');

var dchiper = crypto.createDecipher('AES192','secret');

var chiperText = chiper.final('utf8');

var dchiperText = dchiper.final(chiperText, 'secret');
//dchiperText += decipher.final('utf-8');

console.log("Plain Text is : "+ plainText)
console.log("Encrypted text is : "+ chiperText)
//console.log("Dcrypted text is : "+ dchiperText)