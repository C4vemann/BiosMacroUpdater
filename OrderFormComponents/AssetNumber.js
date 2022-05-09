class AssetNumber{
	constructor(val){
		this.value = val;
		this.text = this.text();
		this.input = this.input();

		this.element = this.init(this.text, this.input);
	}

	text(){
		let main = document.createElement("p");
		main.className = "order_text";
		main.innerText = "Asset #: ";
		return main;
	}

	input(){
		let main = document.createElement("input");
		main.className = "order_input";
		main.value = this.value;
		main.readOnly = true;
		main.addEventListener("change", () => {
			this.value = this.input.value;
		});
		return main;
	}

	init(text,input){
		let main = document.createElement("div");
		main.className = "order_content";
		main.appendChild(text);
		main.appendChild(input);
		return main;
	}

}