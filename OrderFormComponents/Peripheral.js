class Peripheral{
	constructor(val){
		this.value = val;
		this.input = this.input();

		this.element = this.init(this.input);
	}


	input(){
		let main = document.createElement("input");
		main.className = "order_input";
		main.value = this.value;
		main.readOnly = true;
		main.addEventListener("change", () => {
			if(MyRegex.peripheralNumberMatcher(this.input.value)){
				this.value = this.input.value;
			} else {
				this.input.value = this.value;
			}
		});
		return main;
	}

	init(input){
		let main = document.createElement("div");
		main.className = "order_content";
		main.appendChild(input);
		return main;
	}

}