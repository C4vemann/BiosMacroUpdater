class MyHeaderRow{
	constructor(a,b){
		this.parentTable = a;
		this.columns = new Array();
		
		this.columns.push(new MyIdTableHeader(this.parentTable,b[0]));
		this.columns.push(new MyNameTableHeader(this.parentTable,b[1]));
		this.columns.push(new MyVersionTableHeader(this.parentTable,b[2]));
		


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