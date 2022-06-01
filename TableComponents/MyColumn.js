class MyColumn{
	constructor(x){
		this.value = x;
		this.element = this.init(this.value);
	}

	init(value){
		let main = document.createElement("td");
		main.innerText = value;
		return main;
	}
}