var viewModel = {
		english: ko. observable("init")   //字串代表輸入
		};

viewModel.chinese = ko.computed(function(){
	var word = this.english();
	if(word == "hello"){
		return '你好';  //回傳一個值
	}
	else if(word == "I"){
		return "我"
	}
	else if(word == "you"){
		return "你"
	}
	else if(word == "he"){
		return "他"
	}
	
	},viewModel); 

//Active konckout.js
ko.applyBindings(viewModel);



