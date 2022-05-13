class Peripherals{
	constructor(x){
		this.values = new Array();
		for(let val of x){
			this.values.push(new Peripheral(val));
		}

		this.text = this.text();

		this.element = this.init(this.values, this.text);
	}

	text(){
		let main = document.createElement("p");
		main.className = "order_text";
		main.innerText = "Peripherals: ";
		return main;
	}

	init(values, text){
		let main = document.createElement("div");
		main.className = "order_content";
		main.appendChild(text);

		for(let val of this.values){
			main.appendChild(val.element);
		}

		return main;
	}


}