class MyTable{
	constructor(data){
		this.headers = new MyHeaderRow(this,['ID','Name','Version']);
		this.rows = new Array();
		for(let d of data){
			this.rows.push(new MyRow(this,d));
		}
		this.element = this.init(this.headers,this.rows);
	}

	init(headers,rows){
		let main = document.createElement("table");

		main.appendChild(headers.element);

		for(let row of this.rows){
			main.appendChild(row.element);
		}

		return main;
	}
}