class Peripheral{
	constructor(list,val,id){
		this.parentList = list;
		this.id = id;
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

		let deleteButton = document.createElement("button");
		deleteButton.innerText = "X";
		deleteButton.className = "delete_button";
		deleteButton.addEventListener("click", () => {


			if(this.parentList.top <= 0){
				console.log("List too small");
			} else{
				this.element.remove();

				for(let x = this.id; x < this.parentList.list.length; x++){
					if(this.parentList.list[x+1] != null){
						this.parentList.list[x] = this.parentList.list[x+1];
						this.parentList.list[x].id = x;
					}
				}
				this.parentList.pop();
			}
		});

		main.appendChild(deleteButton);

		return main;
	}

}