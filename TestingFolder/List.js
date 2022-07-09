
//works but is super confusing with the delete methods idk how i got it to work but it did

function List(title,subtitle,className){
	let isEditable = false;
	let list = [];
	let header = createHeader();
	let body = createBody();
	let element = init();

	function entry(item,options){
		let isEditable = true;
		//create item wrapper
		let entryHeader = createEntryHeader();
		let entryBody = createEntryBody();
		let entryElement = entryInit();

		function createEntryHeader(){
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
						main.appendChild(button);
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
						main.appendChild(button);
					}
				}
			}
			return main;
		}

		function createEntryBody(){
			let main = document.createElement("div");
			if(className != ""){
				main.className = className + "_item_body";
			}
			main.appendChild(item.getElement());
			return main;
		}

		function entryInit(){
			let main = document.createElement("div");
			if(className != ""){
				main.className = className + "_item";
			}
			main.appendChild(entryHeader);
			main.appendChild(entryBody);
			console.log(main);
			return main;
		}

		function getElement(){
			console.log(isEditable);
			return entryElement;
		}
		return{
			getElement
		}
	}



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
		console.log(isEditable);
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