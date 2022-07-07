function TextComponent(text,className){
	let isEditable = false;
	let element = init();
	function init(){
		let main = document.createElement("p");
		main.className = className;
		main.innerText = text;
		return main;
	}
	function changeValue(){
		element.innerText = text;
	}
	function getElement(){
		return element;
	}
	function toggleEdit(){
		if(isEditable){
			isEditable = false;
		} else {
			isEditable = true;
		}
	}
	return {
		changeValue, 
		getElement,
		toggleEdit
	}
}