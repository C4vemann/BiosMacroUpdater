class MyNameTableHeader{
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
			console.log(this.parentTable.rows.filter(this.check));
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