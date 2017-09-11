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

//exports.Account = Account

exports.createAccount = function(name){
	return new Account(name)
} 