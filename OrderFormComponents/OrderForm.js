class OrderForm{
	
	constructor(list,id,x,y,z,a,b){
		this.isEditing = false;

		this.parentList = list;

		this.formId = new OrderFormId(id);
		this.orderNumber = new OrderNumber(x);
		this.itemNumber = new ItemNumber(y);
		this.serialNumber = new SerialNumber(z);
		this.assetNumber = new AssetNumber(a);
		this.peripherals = new Peripherals(b);
		
		this.element = this.init(this.formId, this.orderNumber,this.itemNumber,this.serialNumber,this.assetNumber,this.peripherals);
	}

	init(id, x,y,z,a,b){
		let main = document.createElement("div");
		main.className = "order_container";

		let deleteButton = document.createElement("button");
		deleteButton.innerText = "X";
		deleteButton.className = "delete_button";
		deleteButton.addEventListener("click", () => {


			if(this.parentList.top <= 0){
				console.log("List too small");
			} else{
				this.element.remove();

				for(let x = this.formId.value - 1; x < this.parentList.list.length; x++){
					if(this.parentList.list[x+1] != null){
						this.parentList.list[x] = this.parentList.list[x+1];
						this.parentList.list[x].formId.changeValue(x + 1);
					}
				}
				this.parentList.pop();
				this.parentList.top--;
			}
		});

		let header = document.createElement("div");
		header.className = "order_header";
		header.appendChild(id.element);
		header.appendChild(deleteButton);
		main.appendChild(header);

		let body = document.createElement("div")
		body.className = "order_body";
		body.appendChild(x.element);
		body.appendChild(y.element);
		body.appendChild(z.element);
		body.appendChild(a.element);
		body.appendChild(b.element);
		main.appendChild(body);
		
		let button = document.createElement("button");
		button.innerText = "Edit";
		button.addEventListener("click", () => {
			if(this.isEditing){
				this.isEditing = false;
				this.orderNumber.input.readOnly = true;
				this.itemNumber.input.readOnly = true;
				this.serialNumber.input.readOnly = true;
				this.assetNumber.input.readOnly = true;
				for(let x of this.peripherals.values){
					x.input.readOnly = true;
				}
				button.innerText = "Edit";
			} else {
				this.isEditing = true;
				this.orderNumber.input.readOnly = false;
				this.itemNumber.input.readOnly = false;
				this.serialNumber.input.readOnly = false;
				this.assetNumber.input.readOnly = false;
				for(let x of this.peripherals.values){
					x.input.readOnly = false;
				}
				button.innerText = "Save";
			}
		});

		let footer = document.createElement("div");
		footer.className = "order_footer";
		footer.appendChild(button);
		main.appendChild(footer);

		return main;
	}
}