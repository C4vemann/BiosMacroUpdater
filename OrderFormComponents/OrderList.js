class OrderList{
	constructor(){
		this.list = new Array();
		this.top = 0;
	}

	push(x,y,v,z,a,b){
		this.top++;
		this.list.push(new OrderForm(this,this.top,x,y,v,z,a,b));
	}

	pop(){
		this.list.pop();
		this.top--;
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

	print(){
		let string = `<HAScript name="Script" description="" timeout="60000" pausetime="300" promptall="true" blockinput="true" author="nyconfig" creationdate="Jun 13, 2022 1:13:47 PM" supressclearevents="false" usevars="false" ignorepauseforenhancedtn="true" delayifnotenhancedtn="0" ignorepausetimeforenhancedtn="true" continueontimeout="false">`;
		for(let el of this.list){
			string += el.print();
		}
		string += `</HAScript>`;
		return string;
	}
}