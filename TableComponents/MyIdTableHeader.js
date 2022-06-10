
//bug when deleting an entry after filtering it changes the values wierd like so the filtering wont happen again after that deletion


class MyIdTableHeader{
	constructor(z,x){
		this.parentTable = z;
		this.value = x;

		this.sort = 0;
		this.sortButton = this.createSortButton();

		this.element = this.init(this.value,this.sortButton);

		console.log(this.parentTable);
	}

	createSortButton(){
		let filterButton = document.createElement("button");
		filterButton.innerText = "^";
		filterButton.addEventListener("click", () => {
			if(this.sort == 0){
				this.sort = 1;

				let p1 = 0;
				let p2 = 0;

				while(p1 != this.parentTable.rows.list.length && p2 != this.parentTable.rows.list.length){
					let temp = null;
					if(this.parentTable.rows.list[p1].x.value <= this.parentTable.rows.list[p2].x.value){
						p2++;
					} else {

						temp = this.parentTable.rows.list[p1];
						this.parentTable.rows.list[p1] = this.parentTable.rows.list[p2];
						this.parentTable.rows.list[p1].id = p1;
						this.parentTable.rows.list[p2] = temp;
						this.parentTable.rows.list[p2].id = p2;
						
						this.parentTable.rows.list[p1].element.parentNode.insertBefore(this.parentTable.rows.list[p1].element,this.parentTable.rows.list[p2].element);
						
						p2 = p1;
						p2++;
					}
					if(p2 == this.parentTable.rows.list.length){
						p1++;
						p2 = p1;
					}
				}

				this.sortButton.innerText = "v";
			} else {
				this.sort = 0;

				let p1 = 0;
				let p2 = 0;

				while(p1 != this.parentTable.rows.list.length && p2 != this.parentTable.rows.list.length){
					let temp = null;
					if(this.parentTable.rows.list[p1].x.value >= this.parentTable.rows.list[p2].x.value){
						p2++;
					} else {
						temp = this.parentTable.rows.list[p1];
						this.parentTable.rows.list[p1] = this.parentTable.rows.list[p2];
						this.parentTable.rows.list[p1].id = p1;
						this.parentTable.rows.list[p2] = temp;
						this.parentTable.rows.list[p2].id = p2;

						this.parentTable.rows.list[p1].element.parentNode.insertBefore(this.parentTable.rows.list[p1].element,this.parentTable.rows.list[p2].element);
						
						p2 = p1;
						p2++;
					}
					if(p2 == this.parentTable.rows.list.length){
						p1++;
						p2 = p1;
					}
				}

				this.sortButton.innerText = "^";

			}

			this.parentTable.rows.print();

		},false);
		return filterButton;
	}

	init(value,sortButton){
		let main = document.createElement("th");
		main.innerText = value;
		main.appendChild(sortButton);
		return main;
	}
}
