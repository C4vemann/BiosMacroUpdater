class MyTable{
	constructor(data){
		this.headers = new MyHeaderRow(this,['ID','Name','Version']);
		this.rows = new MyRowList();
		for(let d of data){
			this.rows.push(d);
		}

		this.table = this.createView(this.headers,this.rows);
		this.element = this.init(this.table);
	}

	createView(headers,rows){
		let main = document.createElement("table");

		main.appendChild(headers.element);

		for(let row of this.rows.list){
			main.appendChild(row.element);
		}

		return main;
	}

	init(table){
		let main = document.createElement("div");
		main.className = "table_wrapper";

		main.appendChild(table);

		return main;
	}

	add(x,y,z){
		this.rows.push({id:x,name:y,version:z});
		this.table.appendChild(this.rows.list[this.rows.list.length - 1].element);
	}
}