function InputComponent(value,type){
	let editable = false;

	let element = init();

	function init(){
		let main = document.createElement("input");
		main.value = value;
		main.dataset.type = type;
		main.readOnly = true;
		main.addEventListener("change", () => {
			switch(main.dataset.type){
				case 'order':
				(MyRegex.orderNumberMatcher(main.value)) ? true : main.value = '';
				break;
				case 'item':
				(MyRegex.itemNumberMatcher(main.value)) ? true : main.value = '';
				break;
				case 'version':
				(MyRegex.versionNumberMatcher(main.value)) ? true : main.value = '';
				break;
				case 'serial':
				(MyRegex.serialNumberMatcher(main.value)) ? true : main.value = '';
				break;
				case 'asset':
				(MyRegex.assetNumberMatcher(main.value)) ? true : main.value = '';
				break;
				case 'peripheral':
				(MyRegex.peripheralNumberMatcher(main.value)) ? true : main.value = '';
				break;
				default: break;
			}
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
		if(editable){
			editable = false;
			element.readOnly = true;
		} else {
			editable = true;
			element.readOnly = false;
		}
	}

	function isEditable(){
		return editable;
	}




	return {
		getElement,
		getValue,
		toggleEdit,
		isEditable
	}
}