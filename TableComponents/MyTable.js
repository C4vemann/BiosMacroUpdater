class MyTable{
	constructor(data){
		this.headers = new MyHeaderRow(this,['ID','Name','Version']);
		this.rows = new MyRowList();
		for(let d of data){
			this.rows.push(d);
		}
		this.element = this.init(this.headers,this.rows);
	}

	init(headers,rows){
		let main = document.createElement("table");

		main.appendChild(headers.element);

		for(let row of this.rows.list){
			main.appendChild(row.element);
		}

		return main;
	}

	add(x,y,z){
		this.rows.push({id:x,name:y,version:z});
		this.element.appendChild(this.rows.list[this.rows.list.length - 1].element);
	}
}