class Account{
	constructor(name){
		this.name=name;
	}
	
	open(){
		console.log("Account opened for this "+ this.name)
	}
	
	close(){
		console.log("Account closed for this "+ this.name)
	}
}

//One way is like module export and create object at the time of calling
//exports.Account = Account

//Second way is like factory pattern
exports.createAccount = function(name){
	return new Account(name)
} 