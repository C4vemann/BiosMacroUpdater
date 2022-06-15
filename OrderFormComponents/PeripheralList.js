class PeripheralList{
	constructor(x){
		this.list = new Array();
		this.top = 0;
		for(let val of x){
			this.list.push(new Peripheral(this,val,this.list.length));
			this.top++;
		}

		this.text = this.text();

		this.body = this.body();

		this.emptyInput = this.emptyInput();

		this.element = this.init(this.body, this.text, this.emptyInput);
	}

	body(){
		let main = document.createElement("div");

		for(let val of this.list){
			main.appendChild(val.element);
		}

		return main;
	}

	text(){
		let main = document.createElement("p");
		main.className = "order_text";
		main.innerText = "Peripherals: ";
		return main;
	}

	init(body, text, emptyInput){
		let main = document.createElement("div");
		main.className = "order_content";
		main.appendChild(text);

		main.appendChild(body);
		main.appendChild(emptyInput);

		return main;
	}

	emptyInput(){
		let emptyInput = document.createElement("input");

		emptyInput.className = "order_input";
		emptyInput.readOnly = true;
		emptyInput.addEventListener("change", () => {
			if(MyRegex.peripheralNumberMatcher(this.emptyInput.value)){
				this.list.push(new Peripheral(this,this.emptyInput.value,this.list.length));
				this.body.appendChild(this.list[this.list.length - 1].element);
				this.top++;
				this.emptyInput.value = "";
			} else {
				this.emptyInput.value = "";
			}
			
		});
		return emptyInput;
	}
	pop(){
		this.list.pop();
		this.top--;
	}

}