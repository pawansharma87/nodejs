# nodejs
Step 1 – Install Node.js
    This is really easy. Hit the Node.js website and click the big green Install button. If for some reason it doesn't, click the downloads button and grab the one you need. Run the installer. 

Step 2 – Check Node.js version
    
    $node -v

    $npm -v
    
Step 3 - Run node programe

    $node programe.js


Javascript ?
* loosely typed language
* functional programming
* only variables and functions are in Javascript
* Dynamic programming language 
* Interpreter compile and run javascript code at run time.
* flexible language
* Javascript Bible
* web browser has a javascript engine which is used as run time environment to execute javascript.
* Netscape is built javascript.
* Official name of javascript environment is Raino 
* Raino has many issues such as memory,performance etc. 
* There are many javascript run time environment such as V8.
* v8 is developed by Google from scratch.
* Nashorn is one more javascript runtime engine which is built by Oracle came in 2014.





What is NodeJs?
* NodeJs is javascript development kit implemented by Google.
* Node.exe is a javascript interpreter. 
* Node is not a programming languange or framework.
* Node is a plateform.

Features of NodeJS

* Asynchronous programming model
* NodeJs plateform is based on the event driven programming model
* Business processing always happens in callback.
* Non Blocking I/O APIs.
* Concurrency Management without multi threading
* It promotes modular approach of development.
* Node has Event Queue and Event loop which is core or heart of Node plateform.

There are two types of Object
* Host Object :
	Objects which are part of the host environment are known as host objects ex window,history,navigator are the host object of browser host environment.
* Native Object :
	Objects which are part of javascript language are known as native object ex
	Date,Array, Math etc.


* Modular Programming Approach using Node:
	* If we want to use one js file into other js file then in node we need to make a js file as  module.
	* the differene between a plain js file and module is only export , module exports some thing 
	If don't export in js file then it will become plain js 
	* exports is a host object provided by node environment 
	* To import a module or js file in other js file we use require.
	* require is a host function which is used to import a module or js 
	ex require('./test.js');
	* we should always use relative path in require but not the absolute path
	* require function returns the reference of module which is being imported.

	* Modules are reusable
	* Modules are sharable
	* Parellel development can happen if we create moduler.
	* easy to maintain and testable.

	* There  are two types of functions in every language
		* Named functions
		* Anonymous function - which does not have a name ex function() { }

	* How to exports an anonymous function in js
	exports.doMultiply = function(a,b) {
		return a+b;
	}

	* Rules of APIs Designing : 
		* Give a meaningful name of an API
		* Never expose origional names of concrete APIs to outside 

	* Javascript version 6 or ec6 or 2015 release. added these features in this release.
		* OOPs concept
		* consants
		* Iterator
		* Generator 

	* We can also use Design pattern in javascript as well just like other languanges.
	* There are mainly two types of syntax :
		1. Sugar Syntax 
		2. Real Syntax
	* Sugar syntax maening syntax which are available in source and will not be available at run time.
	* Real syntax are those which will be same at source as well as at runtime.

* Asynchronous programming model(B):
	* Node is a single threaded environment.
	* The point here is if Node is a single threaded then how it is non blocking or asynchronous?
	* Node uses event driven approach to achieve parellelism.
	* All built-in functions in node are asynchronous.
	* There are two types of functions by nature
		* Synchronous fucntions or Blocking APIs :
			* If a function calls another function from inside it and it waits to finish the execution the it is blocking or synchronous in nature. 
		* Asynchronous fucntions or non blocking APIs:
			* If a function calls another function from inside it and it just trigger the execution and move forward then it is non blocking or asynchronous in nature.
		* To handle the result or execution which are running parellel need to be used callback.
	* Disadvantages of Multithreading
		* Less throughput and more oerhead of creating and managinng life cycles.
		* Context switching is a problem
		* Lifecycle need to be managed by jvm as well as operating system.

	* Callback Mechanism:
		* It is way to track the execution of a function which is called from a particular place.
	* Event Queue,Event Loop 
	* In Node environment there are sync version of every function which are by default async for ex.
	  readFile is a async. There is sync version of readFile is readFileSync like that.
	* writeFile is a function which is async in nature and it is used to write content in a particular file. If file is created yet then it will create a file with given name and write content into that file.
	* If given file is already exist then it will override the content of that file.
	* If we don't want to replace or override content then we can use appendFile() function.

	* Stream is basically an abstraction between the underlying device and our program. It is just like a pipe which has two hands one is our program and another is underlying device where either we want to write data or we want to read data.

	* By using stream while writing or reading data, there will not be any dependency on the underlying device. It used to read/write data in bytes.

	* To acheive the concurrency management events used.
	* An event is basically a notification for ex a function is running in background and a foreground function, to notify the foreground function from background event generates.

	* There are two types of events in UI 
		* Mouse based 
		* Keyboard based

	* There are two types of events in business or enterprise application
		* Situational Events
			Ex. in database we can have record inserted, record deleted, record updated etc.
			* In the same way we can have file handling events such file reading started, file reading finished etc.
		* Timely Based Events ????
			* 


	* SOLID Principle ??
	* The first one is SRP is known as Single Responsibility Principle

	S - Single-responsiblity principle
	O - Open-closed principle
	L - Liskov substitution principle
	I - Interface segregation principle
	D - Dependency Inversion Principle

	* Events Queue:
		* Events queue is a queue of events type.
		* Whenever events generates, those will be locked into events queue.
		* Whenever we run node.exe meaning node command, a very first thing it will create a event queue.

    * Events Loop:
    	* Event Loop is a loop which runs in background to check node status whether node is busy or idle. 
    	* It is just like a while loop with true condition which will have some condition where it will check like if node is idle then it will assign an event to node.
    	* When we run node command at that point of time only the event loop starts.
    	* Hence there is no overhead of multithreads and parellel task is happening that is why throughput is far better as compare to multithreading.
    	* Node is implemented by using c programming so program can talk to hardward quickly as compare to java because in java, program instruction will be converted into c++ then from c++ to c then c to hardware. But in node, instructions will be converted into c and from c to hardware. that is why performance is good.
    	* Node gives 500 times better performance as compare to mult threaded application.


    * Node is not ment for :

    	* Large scale business application
    	* Enterprise application
    	* For ex applications such as Flipkart,Facebook etc can not be implemented by using Node.
    	* Producer Consumer problem can not be implemented by using node.
    * Node is ment for:
    	* Node is for only medium and small size application.
    	* Node is ment for developing DIRT (Data Intensive Real Application)
    	* ex. application which generates one time password in banking that can be implemented by using node.
    	* Indian Railway application which tracks the current position of train , can be implemented by using node.
    	* Cricket Score board application,ShareMarket Application,Chat application like WhatsApp.


    * There are three types of application in market:
    	* UI centric 
    	* Business logic centric
    	* Data centric

	* Since Node uses Event Queue to store events and we know that queue has FIFO meaning first come first serve order.
    * So we have a program in that we are reading files. one file has 10 GB file and other file has 2KB file so accordingly when events will be generated the first file events will take place first so second file reading event will be executed after first since those events are in queue.
    But here reading data event will not be store in one go meaning when it read data again and again and genterate data event again and again till the reading will be over but in case of second file reading data event will be less so second file will be completed first.


    * Crypto Module = meaning hidden writing
    They are two types : 
    	
    * reversable 
    	* AES ( Advanced Encryption Standards)
    	* In this we require three things 1. Formula 2. Key 3. Password
    	* PBE ( Password Based Encryption)
    	* DES (digital encryption standard)

    * no reversable 
    	* First digest algorithm is md1 ( message digest version 1)
    	* Now we have md5 
    	* SHA ( Secure Hashing Algorithm) SHA1 and SHA2
    	
    * Duplex 
    	* Its a stream which is used for both writing as well as reading the data from stream.

    * Http Module:
    	* Http is an internal module of node which is used to write http client and server.

    * Express:
    	* Express is a framework which is used to implement REST APIs in node. Express itself can be used to as server as well.

    * Sails:
    	* Sails is a framework which is used to implememt application by using MVC pattern

	<img src="node_slides.pdf" alt="some text"  width="4200" height="4200">
