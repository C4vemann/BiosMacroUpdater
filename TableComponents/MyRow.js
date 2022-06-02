class MyRow{
	constructor(t,id,a){
		this.parentList = t;
		this.id = id;
		this.isEditing = false;
		this.x = new MyIdColumn(a.id);
		this.y = new MyNameColumn(a.name);
		this.z = new MyVersionColumn(a.version);

		this.element = this.init(this.x,this.y,this.z);
	}

	init(x,y,z){
		let main = document.createElement("tr");

		main.appendChild(x.element);
		main.appendChild(y.element);
		main.appendChild(z.element);

		let editButton = document.createElement("button");
		editButton.innerText = "Edit";
		editButton.addEventListener("click",()=>{
			if(this.isEditing){
				this.isEditing = false;
				this.x.input.readOnly = true;
				this.y.input.readOnly = true;
				this.z.input.readOnly = true;
				editButton.innerText = "Edit";
			} else {
				this.isEditing = true;
				this.x.input.readOnly = false;
				this.y.input.readOnly = false;
				this.z.input.readOnly = false;
				editButton.innerText = "Save";
			}
		},false);

		main.appendChild(editButton);

		let deleteButton = document.createElement("button");
		deleteButton.innerText = "X";
		deleteButton.addEventListener("click",()=>{

			if(this.parentList.top <= 0){
				console.log("List too small");
			} else{
				this.element.remove();

				for(let x = this.id; x < this.parentList.list.length; x++){
					if(this.parentList.list[x+1] != null){
						this.parentList.list[x] = this.parentList.list[x+1];
						this.parentList.list[x].id = x;
					}
				}
				this.parentList.pop();
			}

			console.log(this.parentList.list);
		},false);
		
		main.appendChild(deleteButton);
		
		return main;
	}
}