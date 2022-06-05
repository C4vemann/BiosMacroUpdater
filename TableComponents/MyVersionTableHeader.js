class MyVersionTableHeader{
	constructor(z,x){
		this.parentTable = z;
		this.value = x;
		this.element = this.init(this.value);
	}

	init(value){
		let main = document.createElement("th");
		main.innerText = value;

		/*let filterButton = document.createElement("button");
		filterButton.innerText = "^";
		filterButton.addEventListener("click",()=>{
			let tempList = new Array();
			let temp = '0';

			for(let i = 0; i < this.parentTable.rows.list.length; i++){
				console.log(tempList);
				console.log(temp);
				let temp2 = this.parentTable.rows.list[i].z.value.split(".");
				let temp3 = temp.split(".");
				console.log(temp2);
				console.log(temp3);

				//console.log(this.parentTable.rows.list[i].z.value + " " + this.parentTable.rows.list[i + 1].z.value);
			}
		},false);

		main.appendChild(filterButton);*/
		return main;
	}
}


/*function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
 
  while (switching) {
    switching = false;
    rows = table.rows;
   
   
    for (i = 1; i < (rows.length - 1); i++) {

	  shouldSwitch = false;
      
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      
      
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}*/