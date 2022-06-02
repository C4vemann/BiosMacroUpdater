class MyVersionColumn{
	constructor(x){
		this.value = x;
		this.input = this.input();
		this.element = this.init(this.input);
	}

	input(){
		let main = document.createElement("input");
		main.value = this.value;
		main.readOnly = true;
		main.addEventListener("change", () => {
			if(MyRegex.versionNumberMatcher(this.input.value)){
				this.value = this.input.value;
			} else {
				this.input.value = this.value;
			}
		});
		return main;
	}

	init(input){
		let main = document.createElement("td");

		main.appendChild(input);

		return main;
	}
}