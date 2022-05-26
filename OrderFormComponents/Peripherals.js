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

		if(this.values.length == 0){
			main.appendChild(this.createEmptyInput());
		} else {
			for(let val of this.values){
				main.appendChild(val.element);
			}

		}


		return main;
	}

	createEmptyInput(){
		let emptyInput = document.createElement("input");

		emptyInput.className = "order_input";
		emptyInput.readOnly = true;
		emptyInput.addEventListener("change", () => {
			/*if(MyRegex.peripheralNumberMatcher(this.input.value)){
				this.value = this.input.value;
			} else {
				this.input.value = this.value;
			}*/

			console.log(this);
		});
		return emptyInput;
	}

}