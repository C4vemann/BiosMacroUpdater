class OrderForm{
	static count = 0;
	
	constructor(x,y,z,a,b){
		OrderForm.increaseCount();
		this.isEditing = false;

		this.formId = new OrderFormId(OrderForm.count);
		this.orderNumber = new OrderNumber(x);
		this.itemNumber = new ItemNumber(y);
		this.serialNumber = new SerialNumber(z);
		this.assetNumber = new AssetNumber(a);
		this.peripherals = new Peripherals(b);
		
		this.element = this.init(this.formId, this.orderNumber,this.itemNumber,this.serialNumber,this.assetNumber,this.peripherals);
	}
	static increaseCount(){
		return OrderForm.count++;
	}
	init(id, x,y,z,a,b){
		let main = document.createElement("div");
		main.className = "order_container";
		main.appendChild(id.element);
		main.appendChild(x.element);
		main.appendChild(y.element);
		main.appendChild(z.element);
		main.appendChild(a.element);
		main.appendChild(b.element);
		
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
		main.appendChild(button);
		return main;
	}
}