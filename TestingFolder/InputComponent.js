function InputComponent(value,type,className){
	let isEditable = false;
	let element = init();
	function init(){
		let main = document.createElement("input");
		main.className = className;
		main.value = value;
		main.dataset.type = type;
		main.readOnly = false;
		main.addEventListener("change", () => {
		});
		return main;
	}
	function getValue(){
		return element.value;
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
		getElement,
		getValue,
		toggleEdit
	}
}