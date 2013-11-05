
// Queue functions to be run when jquery is loaded and ready
// Useful when you have code coming in before jquery
// 2013/11/01 Zafar Iqbal http://zaf.io/

// Usage:
// jqueryWhenReady.run(...your function...);
// or jqueryWhenReady.run(function(){...your code...});

var jqueryWhenReady=(function(){

	var my=function(){};

	var functions=[];

	my.run=function(func){
		if(window.jQuery){
			func();
		}else{
			functions.push(func);
		}
	}

	my.runFunctions=function(){
		for (var i=0;i<functions.length;i++){
			functions[i]();
		}
	};

	my.ticktock=function(){
		if(window.jQuery){
				my.runFunctions();
				return;
		}
		window.setTimeout( my.ticktock, 10 );
	};

	my.ticktock();

	return(my);

})();