var Cloudant = require('cloudant')

var me = '8827ab83-7795-4d1b-861d-346c851587ef-bluemix.cloudant.com'; // Set this to your own account 
var password = "dc6e83e7f8cc31cba9408ca251d96a7d60d00ea13d7e7d543de6067bd62c9f54";
 
// Initialize the library with my account. 
var cloudant = Cloudant({account:me, password:password});
 
cloudant.db.list(function(err, allDbs) {
  console.log('All my databases: %s', allDbs.join(', '))
});
