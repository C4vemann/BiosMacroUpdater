class MyRegex{
	static orderNumberMatcher(str){
		if(str.length == 6){
			let pattern = /^[0-9]{6}$/;
			return pattern.test(str);
		} else {
			return false;
		}
	}

	static itemNumberMatcher(str){
		if(str.length == 7){
			let pattern = /^[0-9]{7}$/;
			return pattern.test(str);
		} else {
			return false;
		}
	}

	static serialNumberMatcher(str){
		if(str.length == 7){
			let pattern = /^(?=.*[A-Z])(?=.*\d)[A-Z\d]{7}$/;
			return pattern.test(str);
		} else if(str.length == 10){
			let pattern = /^MXL(?=.*[A-Z])(?=.*\d)[A-Z\d]{7}$/;
			return pattern.test(str);
		} else {
			return false;
		}
	}

	static assetNumberMatcher(str){
		if(str.length == 11){
			let pattern = /^ITE[0-9]{8}$/;
			return pattern.test(str);
		} else {
			return false;
		}
	}

	static peripheralNumberMatcher(str){
		if(str.length == 12){
			let pattern = /^(?=.*[A-Z])(?=.*\d)[A-Z\d]{12}$/;
			return pattern.test(str);
		} else if(str.length == 15){
			let pattern = /^(?=.*[A-Z])(?=.*\d)[A-Z\d]{15}$/;
			return pattern.test(str);
		} else {
			return false;
		}
	}
}