class MyRow{
	constructor(t,a){
		this.parentTable = t;
		this.x = new MyColumn(a.id);
		this.y = new MyColumn(a.name);
		this.z = new MyColumn(a.version);

		this.element = this.init(this.x,this.y,this.z);
	}

	init(x,y,z){
		let main = document.createElement("tr");

		main.appendChild(x.element);
		main.appendChild(y.element);
		main.appendChild(z.element);

		let editButton = document.createElement("button");
		editButton.innerText = "Edit";
		editButton.addEventListener("click",()=>{console.log(this)},false);

		main.appendChild(editButton);

		let deleteButton = document.createElement("button");
		deleteButton.innerText = "X";
		deleteButton.addEventListener("click",()=>{console.log(this.parentTable)},false);
		
		main.appendChild(deleteButton);
		
		return main;
	}
}