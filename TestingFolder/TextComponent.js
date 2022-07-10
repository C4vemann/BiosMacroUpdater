function TextComponent(text,className){
	let editable = false;

	let element = init();

	function init(){
		let main = document.createElement("p");
		main.className = className;
		main.innerText = text;
		return main;
	}




	function changeValue(x){
		if(editable){
			element.innerText = x;
		}
	}
	function getValue(){
		return element.innerText;
	}

	function getElement(){
		return element;
	}

	function toggleEdit(){
		(editable) ? editable = false : editable = true;	
	}

	function isEditable(){
		return editable;
	}




	return {
		changeValue, 
		getValue,
		getElement,
		toggleEdit,
		isEditable
	}
}