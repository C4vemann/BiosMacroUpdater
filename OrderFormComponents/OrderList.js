class OrderList{
	constructor(){
		this.list = new Array();
		this.top = 0;
	}

	push(x,y,z,a,b){
		this.top++;
		this.list.push(new OrderForm(this,this.top,x,y,z,a,b));
	}

	pop(){
		this.list.pop();
	}
	removeByIndex(x){
		if(this.top <= 0){
			console.log("List too small");
		} else{
			this.list[x].element.remove();

			for(x; x < this.list.length; x++){
				if(this.list[x+1] != null){
					this.list[x] = this.list[x+1];
					this.list[x].element.id = x + 1;
					this.list[x].formId.changeValue(x + 1);
				}
			}
			this.list.pop();
			this.top--;
		}
		console.log(this.list);
	}
}