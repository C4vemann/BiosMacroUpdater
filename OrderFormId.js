class OrderFormId{
	constructor(x){
		this.value = x;
		this.text = this.text();
		this.element = this.init(this.text);
	}
	text(){
		let main = document.createElement("p");
		main.className = "order_text form_id";
		main.innerText = this.value + ".";
		return main;
	}
	init(text){
		let main = document.createElement("div");
		main.appendChild(text);
		return main;
	}
	changeValue(x){
		this.value = x;
		this.text.innerText = x + ".";
	}
}