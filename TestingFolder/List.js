
//works but is super confusing with the delete methods idk how i got it to work but it did

function List(title,subtitle,className){
	let list = [];
	let header = createHeader();
	let body = createBody();
	let element = init();

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

		let isEditable = false;
		//add item to the list
		list.push(item);

		//create item wrapper
		let main = document.createElement("div");
		if(className != ""){
			main.className = className + "_item";
		}

		//create item header
		let itemHeader = document.createElement("div");
		if(className != ""){
			itemHeader.className = className + "_item_header";
		}

		//set options and element are in the header
		if(options != null){
			for(let option of options){

				//sets item index
				if(option == "SHOW_INDEX"){
					itemHeader.appendChild(TextComponent((list.length + "."), (className + "_item_header_text")).getElement());
				}

				//sets the safe edit option
				if(option == "SAFE_EDIT"){
					let button = document.createElement("button");
					button.className = className + "_edit_button";
					button.innerText = "EDIT";
					button.addEventListener("click", () => {
						if(isEditable){
							isEditable = false;
							item.toggleEdit();
							button.innerText = "EDIT";
						} else {
							isEditable = true;	
							item.toggleEdit();
							button.innerText = "SAVE";
						} 
					});
					itemHeader.appendChild(button);
				}

				//sets the unsafe edit option
/*				if(option == "UNSAFE_EDIT"){
					isEditable = true;
				}*/

				//sets the deletable button
				if(option == "DELETABLE"){
					let button = document.createElement("button");
					if(className != ""){
						button.className = className + "_delete_button";
					}
					button.innerText = "X";
					button.addEventListener("click", () => {
						console.log(item.getElement());
						console.log(isEditable);
						if(item.isEditableFunction()){
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
							main.remove();
						}
					});
					itemHeader.appendChild(button);
				}
			}
		}


		main.appendChild(itemHeader);

		let itemBody = document.createElement("div");
		if(className != ""){
			itemBody.className = className + "_item_body";
		}
		itemBody.appendChild(item.getElement());

		main.appendChild(itemBody);

		body.appendChild(main);
	}

	function getList(){
		return list;
	}

	function getElement(){
		return element;
	}

/*	function toggleEdit(){
		(isEditable) ? isEditable = false : isEditable = true;	
		console.log(isEditable);
	}*/

	return{
		getList,
		getElement,
		addEntry,
		//toggleEdit
	}
}