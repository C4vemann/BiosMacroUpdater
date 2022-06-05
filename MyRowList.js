class MyRowList{
	constructor(){
		this.list = new Array();
		this.top = 0;
	}

	push(y){
		this.list.push(new MyRow(this,this.top,y));
		this.top++;
	}

	pop(){
		this.list.pop();
		this.top--;
	}

}