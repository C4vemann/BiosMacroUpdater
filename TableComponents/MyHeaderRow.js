class MyHeaderRow{
	constructor(a,b){
		this.parentTable = a;
		this.columns = new Array();
		for(let el of b){
			this.columns.push(new MyTableHeader(this.parentTable,el));
		}


		this.element = this.init(this.columns);
	}

	init(columns){
		let main = document.createElement("tr");

		for(let col of columns){
			main.appendChild(col.element);
		}

		return main;
	}
}