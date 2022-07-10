
//works but is super confusing with the delete methods idk how i got it to work but it did

function List(title,subtitle,className){
	let editable = false;
	let list = [];
	let header = createHeader();
	let body = createBody();
	let element = init();

	function entry(item,options){
		let editable = false;
		//create item wrapper
		let header = createHeader();
		let body = createBody();
		let element = init();

		function createHeader(){
			//create item header
			let main = document.createElement("div");
			if(className != ""){
				main.className = className + "_item_header";
			}

			//set options and element are in the header
			if(options != null){
				for(let option of options){

					//sets item index
					if(option == "SHOW_INDEX"){
						main.appendChild(TextComponent((list.length + "."), (className + "_item_header_text")).getElement());
					}

					//sets the safe edit option
					if(option == "SAFE_EDIT"){
						let button = document.createElement("button");
						button.className = className + "_edit_button";
						button.innerText = "EDIT";
						button.addEventListener("click", () => {

							//1. outer entry 
							if(editable){
								toggleEdit();
								button.innerText = "EDIT";
							} else {
								toggleEdit();	
								button.innerText = "SAVE";
							} 
						});
						main.appendChild(button);
					}

					//sets the unsafe edit option
					if(option == "UNSAFE_EDIT"){
						editable = true;
					}

					//sets the deletable button
					if(option == "DELETABLE"){
						let button = document.createElement("button");
						if(className != ""){
							button.className = className + "_delete_button";
						}
						button.innerText = "X";
						button.addEventListener("click", () => {
							console.log("Outer entry: " + editable);
							console.log("Inner entry: " + item.isEditable());
							//console.log(item.getValue());
							/*for(let stuff of item.getList()){
								console.log(stuff.getValue());
							}*/
							if(item.isEditable()){
								let i = 0;
								for(i; i < list.length; i++){
									if(item === list[i]){
										break;
									}
								}

								for(i; i < list.length; i++){
									if(list[i+1] == null){
										break;
									}
									list[i] = list[i+1];
								}

								list.pop();
								element.remove();
							}
						});
						main.appendChild(button);
					}
				}
			}
			return main;
		}

		function createBody(){
			let main = document.createElement("div");
			if(className != ""){
				main.className = className + "_item_body";
			}
			main.appendChild(item.getElement());
			return main;
		}

		function init(){
			let main = document.createElement("div");
			if(className != ""){
				main.className = className + "_item";
			}
			main.appendChild(header);
			main.appendChild(body);
			return main;
		}






		function getElement(){
			return element;
		}


		//3. inner entry
		function toggleEdit(){
			(editable) ? editable = false : editable = true;
			
			item.toggleEdit();	
		}

		function isEditable(){
			return isEditable;
		}



		return{
			getElement,
			toggleEdit,
			isEditable
		}
	}

	//end of inner object



	function createHeader(){
		let main = document.createElement("div");

		//sets className
		if(className != ""){
			main.className = className + "_header";
		}

		//sets the title
		if(title != ""){
			main.appendChild(TextComponent(title, (className + "_header_text")).getElement());
		}

		//sets the subtitle
		if(subtitle != ""){
			main.appendChild(TextComponent(subtitle, (className + "_subheader_text")).getElement());
		}
		
		return main;
	}

	function createBody(){
		let main = document.createElement("div");
		if(className != ""){
			main.className = className + "_body";
		}
		return main;
	}

	function init(){
		let main = document.createElement("div");
		if(className != ""){
			main.className = className;
		}
		main.appendChild(header);		
		main.appendChild(body);
		return main;
	}

	function addEntry(item,options){
		//add item to the list
		list.push(item);
		body.appendChild(entry(item,options).getElement());
	}






	function getList(){
		return list;
	}

	function getElement(){
		return element;
	}


	function toggleEdit(){
		(editable) ? editable = false : editable = true;
		for(let entry of list){
			entry.toggleEdit();
		}
	}

	function isEditable(){
		return editable;
	}





	return{
		getList,
		getElement,
		addEntry,
		toggleEdit,
		isEditable
	}
}