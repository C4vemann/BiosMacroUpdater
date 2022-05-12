class Peripherals{
	constructor(x){
		this.values = x;
		console.log(this.values);
		this.text = this.text();
		//this.input = this.input();

		this.element = this.init(this.text/*,this.input*/);
	}

	text(){
		let main = document.createElement("p");
		main.className = "order_text";
		main.innerText = "Peripherals: ";
		return main;
	}

	/*change(){
		console.log(this.value);
		console.log(this.values);
		console.log(this.values.at(this.id));
		this.values[this.id] = this.value;
	}

	input(){
		let main = document.createElement("div");
		for(let i = 0; i < this.values.length; i++){
			let sub = document.createElement("input");
			sub.id = i;
			sub.className = "order_input";
			sub.value = this.values[i];
			sub.readOnly = false;
			sub.addEventListener("change", this.change,false);
			main.appendChild(sub);
		}
		return main;
	}*/

	init(text/*,input*/){
		let main = document.createElement("div");
		main.className = "order_content";
		main.appendChild(text);
/*		main.appendChild(input);
*/		return main;
	}


}