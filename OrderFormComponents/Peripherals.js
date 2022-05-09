class Peripherals{
	constructor(x){
		this.value = x;
		this.text = new Text("Peripherals: " + x);

		this.element = this.init(this.text);
	}

	init(text){
		let main = document.createElement("div");
		main.appendChild(text.element);
		return main;
	}

	changeValue(val){
		this.value = val;
		this.text.changeText("Peripherals: " + val);
	}

}